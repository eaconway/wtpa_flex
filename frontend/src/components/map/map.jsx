import mapboxgl from "mapbox-gl";
import React from "react";
import moment from "moment";

mapboxgl.accessToken =
  "pk.eyJ1IjoibW96ZWlueSIsImEiOiJjam5semx5YWowMnhwM3dycnB6ZDl5NWM3In0.x0ACysJlzGPOkiyvuBCi2w";

export default class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: []
    };

    this.loadPlaces = this.loadPlaces.bind(this);
    this.getRandomInt = this.getRandomInt.bind(this);
    this.parseTime = this.parseTime.bind(this);
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
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mozeiny/cjno0fjbi0tsq2rrq9g7vvs5c",
      center: [-122.400523, 37.778266],
      // pitch: 60,
      zoom: 13
    });
    this.map.addControl(new mapboxgl.FullscreenControl());
    
  }

  

  componentDidUpdate() {
    if (this.props.venues.length > 0) {
      this.loadPlaces();
    }
  }

  // logic for handelling hover
  handleHover(e, marker, place) {
    this.props.highlightMarker(place);
    e.target.classList.add("highlighted");
  }

  handleOut(e, marker) {
    e.target.classList.remove("highlighted");
    this.props.removehighlightMarker();
  }

  parseTime(date, time) {
    let ddate;
    ddate = {
      month: moment(date).format("MMM"),
      time: moment(time, "HH:mm:ss").format("h:mm a"),
      day: moment(date).format("DD")
    };
    return ddate;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
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

  loadPlaces() {
    let coordinates = [];
    this.state.markers.forEach(m => m.remove());
    let that = this;
    const ordered = this.props.artistSearch
      ? this.orderByDate()
      : this.props.venues;
    ordered.forEach(place => {
      let venue = place._embedded.venues[0];
      let time = that.parseTime(
        new Date(new moment(place.dates.start.localDate)),
        place.dates.start.localTime
      );

      if (!venue.location) {
        return;
      }
      const location = venue.location;
      const image = venue.images
        ? venue.images[that.getRandomInt(0, venue.images.length)].url
        : place.images[that.getRandomInt(0, place.images.length)].url;
      place.venue = venue;
      place.time = time;
      place.location = location;
      const [longitude, latitude] = [
        parseFloat(location.longitude),
        parseFloat(location.latitude)
      ];
      coordinates.push([longitude, latitude]);
      var el = document.createElement("div");
      el.className = "marker";
      let marker = new mapboxgl.Marker({ color: `red` })
        .setLngLat([longitude, latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
              `<div class="popup"><div class="info-image-holder"><img class="tooltip__img" src="${image}"/></div><div class="header__wrapper"><h2 class="popup__header">` +
                place.name +
                `</h2></div><div class="popup__content"><div class="datetime__wrapper"><div class="calendar">
                <p class="popup__month">` +
                time.month +
                `</p><p class="popup__day">` +
                time.day +
                `</p></div><div class="popup__info"><p class="popup__venue">` +
                venue.name +
                `</p><p class="popup__location">` +
                venue.city.name +
                `, ` +
                venue.state.stateCode +
                `</p><p class="popup__time">` +
                time.time +
                `</p></div></div></div><a href=${
                  place.url
                } target="_blank" class="popup__buy">Find Tickets</a>
                </div>`
            )
        )
        .addTo(that.map);
      that.state.markers.push(marker);
      let m = marker;
      marker
        .getElement()
        .addEventListener("mouseenter", e =>
          that.handleHover(e, marker, place)
        );
      marker
        .getElement()
        .addEventListener("mouseleave", e => that.handleOut(e, marker));
    });

    let bounds = coordinates.reduce(function(bounds, coord) {
      return bounds.extend(coord);
    }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));
    this.map.fitBounds(bounds, {
      padding: 80
    });
  }
}
