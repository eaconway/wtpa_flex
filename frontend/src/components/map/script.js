/*global x*/
/*global google*/
/*global $*/

// import * as eventsAPIUtil from '../util/events_api_util';
const key = 'BHFjDGKYYBYl65HYDBYWgVEt2IV7Thnc';

export const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        let x = document.getElementById("location");
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
export const showPosition = (position) => {
    let x = document.getElementById("location");
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

    let latlon = position.coords.latitude + "," + position.coords.longitude;
    // debugger

    // eventsAPIUtil.searchCities(cityName, date, tomorrow);

    // `https://app.ticketmaster.com/discovery/v2/events?apikey=${key}&startDateTime=${date}T00:00:01Z&endDateTime=${tomorrow}T00:00:00Z&city=${cityName}&countryCode=US`

    // https://app.ticketmaster.com/discovery/v2/events.json?apikey=BHFjDGKYYBYl65HYDBYWgVEt2IV7Thnc&latlong=37.798756,-122.4014491&radius=1&startDateTime=2018-10-22T12:00:00Z&endDateTime=2018-10-23T12:00:00Z

    $.ajax({
      type: "GET",
      url: `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${key}&latlong=${latlon}&radius=1&fromDate=2018-10-22&thruDate=2018-10-23&maxResults=25`,
      async: true,
      dataType: "json",
      success: function(json) {
        console.log(json);
        let e = document.getElementById("events");
        e.innerHTML = json.page.totalElements + " events found.";
        showEvents(json);
        initMap(position, json);
      },
      error: function(xhr, status, err) {
        console.log(err);
      }
    });

}

export const showError = (error) => {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}


export const showEvents = (json) => {
    // debugger
    for (let i = 0; i < json.page.size; i++) {
        $("#events").append("<p>" + json._embedded.events[i].name + "</p>");
    }
}


export const initMap = (position, json) => {
    let mapDiv = document.getElementById('map');
    let map = new google.maps.Map(mapDiv, {
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        zoom: 10
    });
    for (let i = 0; i < json.page.size; i++) {
        addMarker(map, json._embedded.events[i]);
    }
}

export const addMarker = (map, event) => {
    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(
        event._embedded.venues[0].location.latitude,
        event._embedded.venues[0].location.longitude
      ),
      map: map
    });
    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png');
    console.log(marker);
}
