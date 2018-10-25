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
    // Note:
    // User https://developer.ticketmaster.com/api-explorer/ to explore possible API queries

    // debugger

    // eventsAPIUtil.searchCities(cityName, date, tomorrow);
    // `https://app.ticketmaster.com/discovery/v2/events?apikey=${key}&startDateTime=${date}T00:00:01Z&endDateTime=${tomorrow}T00:00:00Z&city=${cityName}&countryCode=US`
    // https://app.ticketmaster.com/discovery/v2/events.json?apikey=BHFjDGKYYBYl65HYDBYWgVEt2IV7Thnc&latlong=37.798756,-122.4014491&radius=1&startDateTime=2018-10-22T12:00:00Z&endDateTime=2018-10-23T12:00:00Z

    // url below is only an example
    $.ajax({
      type: "GET",
      url: `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${key}&latlong=${latlon}&radius=1&fromDate=2018-10-22T12:00:00Z&thruDate=2018-10-23T12:00:00Z`,
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
            // x.innerHTML = "User denied the request for Geolocation."
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
    for (let i = 0; i < json.page.size; i++) {
        $("#events").append("<p>" + json._embedded.events[i].name + " - " + json._embedded.events[i].dates.start.dateTime + "</p>");
    }
}


export const initMap = (position, json) => {
    let mapDiv = document.getElementById('map');
    let map = new google.maps.Map(mapDiv, {
      center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      },
      zoom: 10,
      styles: snazzyStyle
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
    marker.setIcon("http://maps.google.com/mapfiles/kml/shapes/firedept.png"); // Example of how icons can be set
    // example of how a listener can be added to icons:
    marker.addListener('click', function () {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
    });
    console.log(marker);
}


const snazzyStyle = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      },
      {
        saturation: "-100"
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        saturation: 36
      },
      {
        color: "#000000"
      },
      {
        lightness: 40
      },
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off"
      },
      {
        color: "#000000"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: "all",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 17
      },
      {
        weight: 1.2
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 20
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#4d6059"
      }
    ]
  },
  {
    featureType: "landscape",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4d6059"
      }
    ]
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#4d6059"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        lightness: 21
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#4d6059"
      }
    ]
  },
  {
    featureType: "poi",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4d6059"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on"
      },
      {
        color: "#7f8d89"
      }
    ]
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#7f8d89"
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#7f8d89"
      },
      {
        lightness: 17
      }
    ]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#7f8d89"
      },
      {
        lightness: 29
      },
      {
        weight: 0.2
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 18
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#7f8d89"
      }
    ]
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#7f8d89"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 16
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#7f8d89"
      }
    ]
  },
  {
    featureType: "road.local",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#7f8d89"
      }
    ]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000"
      },
      {
        lightness: 19
      }
    ]
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#2b3638"
      },
      {
        visibility: "on"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#2b3638"
      },
      {
        lightness: 17
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#24282b"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#24282b"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: "water",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off"
      }
    ]
  }
];