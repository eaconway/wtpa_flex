import mapboxgl from "mapbox-gl";
import React from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoibW96ZWlueSIsImEiOiJjam5semx5YWowMnhwM3dycnB6ZDl5NWM3In0.x0ACysJlzGPOkiyvuBCi2w";

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: []
    };
    
  }

  componentDidMount() {
    this.props.requestParty("5bcf6482ffb3ee129aef1e23")
      .then(() => {
        this.places = this.props.parties.map(party => ({
          type: "Feature",
          properties: {
            title: party.title,
            id: party._id
          },
          geometry: {
            type: "Point",
            coordinates: [party.lat, party.lng]
          },

        }));

        //create the map
        this.map = new mapboxgl.Map({
          container: this.mapContainer,
          style: "mapbox://styles/mozeiny/cjno0fjbi0tsq2rrq9g7vvs5c",
          center: [-122.400523, 37.778266],
          // pitch: 60,
          zoom: 11
        });
    
        this.map.addControl(new mapboxgl.FullscreenControl());
    
        // On load, fill map with actions
        this.map.on("load", () => {
          // Add a layer showing the places.
          this.map.loadImage(
            "https://i.imgur.com/TBkOdXk.png",
            (error, image) => {
              if (error) throw error;
              console.log("image is", image);
              this.map.addImage("party", image);
              this.map.addLayer({
                id: "places",
                type: "symbol",
                source: {
                  type: "geojson",
                  data: {
                    type: "FeatureCollection",
                    features: this.places
                  }
                },
                layout: {
                  "icon-image": "party",
                  "icon-allow-overlap": true,
                  "icon-size": 0.13
                }
              });

              // When a click event occurs on a feature in the places layer, open a popup at the
              // location of the feature, with description HTML from its properties.
              this.map.on("click", "places", e => {
                var coordinates = e.features[0].geometry.coordinates.slice();
                var title = e.features[0].properties.title;

                // Ensure that if the map is zoomed out such that multiple
                // copies of the feature are visible, the popup appears
                // over the copy being pointed to.
                while (
                  Math.abs(e.lngLat.lng - coordinates[0]) > 180
                ) {
                  coordinates[0] +=
                    e.lngLat.lng > coordinates[0] ? 360 : -360;
                }

                new mapboxgl.Popup()
                  .setLngLat(coordinates)
                  .setHTML(title)
                  .addTo(this.map);

                this.props.history.push(`/party/${e.features[0].properties.id}`);
              });

              // Change the cursor to a pointer when the mouse is over the places layer.
              this.map.on("mouseenter", "places", () => {
                this.map.getCanvas().style.cursor = "pointer";
              });

              // Change it back to a pointer when it leaves.
              this.map.on("mouseleave", "places", () => {
                this.map.getCanvas().style.cursor = "";
              });
            }
          );

      });
    })
  }

  render() {
    console.log('attempting to render map');
    var windowHeight = window.innerHeight - 50;
    const style = {
      center: [-122.400523, 37.778266],
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "100%",
      height: windowHeight,
      pitch: 60
    };

    return <div id="map" style={style} ref={el => (this.mapContainer = el)} />;
  }
}
