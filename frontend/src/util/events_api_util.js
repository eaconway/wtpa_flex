// Will move key to .env in production mode
const key = "AS61CrvUrl6XtTCpJhJb43RZWNt50k2G";

export const TestTour = () =>
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=${key}&keyword=ed%20sheeran&countryCode=US`
  ).then(res => {
    return res.json();
  });

export const searchArtist = artistName =>
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=${key}&keyword=${artistName
      .split(" ")
      .join("%20")}&countryCode=US`
  ).then(res => {
    return res.json();
  });

export const searchCities = (cityName, date, tomorrow) =>
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=${key}&startDateTime=${date}T00:00:01Z&endDateTime=${tomorrow}T00:00:00Z&city=${cityName}&countryCode=US`
  ).then(res => {
    return res.json();
  });

export const searchCitieState = (city, state, date, tomorrow) =>
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events?apikey=${key}&startDateTime=${date}T00:00:01Z&endDateTime=${tomorrow}T00:00:00Z&city=${city}&state=${state}&countryCode=US`
  ).then(res => {
    return res.json();
  });
