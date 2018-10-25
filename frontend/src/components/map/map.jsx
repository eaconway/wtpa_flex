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
}
