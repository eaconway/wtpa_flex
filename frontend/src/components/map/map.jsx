import React from 'react';
import * as scriptAPI from './script';

class Map extends React.Component {

    constructor(props) {
        super(props);
        scriptAPI.getLocation();
    }

    render() {
        return <div className="map-div">
            <p id="location">location there</p>
            <div id="map" />
            <div id="events" />
            <script src="https://maps.googleapis.com/maps/api/js" async defer />
          </div>;
    }
}

export default Map;