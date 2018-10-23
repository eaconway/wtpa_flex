import React from 'react';

class Map extends React.Component {
    render() {
        return <div className='map-div'>
            <p id="location">location there</p>
            <div id="map"></div>
            <div id="events"></div>
            <script src="script.js"></script>
            <script src="https://maps.googleapis.com/maps/api/js" async defer></script>
        </div>;
    }
}

export default Map;