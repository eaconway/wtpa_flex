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
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mozeiny/cjno0fjbi0tsq2rrq9g7vvs5c",
      center: [-122.400523, 37.778266],
      pitch: 60,
      zoom: 13
    });
    this.map.addControl(new mapboxgl.FullscreenControl());
  }

  render() {
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
