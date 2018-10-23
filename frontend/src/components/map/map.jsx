import React from 'react';
import * as scriptAPI from './script';

class Map extends React.Component {

    componentDidMount() {
        scriptAPI.getLocation();
        // showPosition();
    }

    constructor(props) {
        super(props);
        // this.addMarker = this.addMarker.bind(this);
        // this.initMap = this.initMap.bind(this);
    }

    // addMarker(map, event) {
    //     debugger;
    //     let marker = new google.maps.Marker({
    //         position: new google.maps.LatLng(event._embedded.venues[0].location.latitude, event._embedded.venues[0].location.longitude),
    //         map: map
    //     });
    //     marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    //     console.log(marker);
    // }

    // initMap(position, json) {
    //     let mapDiv = document.getElementById('map');
    //     let map = new google.maps.Map(mapDiv, {
    //         center: { lat: position.coords.latitude, lng: position.coords.longitude },
    //         zoom: 10
    //     });
    //     for (let i = 0; i < json.page.size; i++) {
    //         addMarker(map, json._embedded.events[i]);
    //     }
    // }


    render() {
        return <div className="map-div">
            <p id="location">location there</p>
            <div id="map" />
            <div id="events" />
          </div>;
    }
}

export default Map;