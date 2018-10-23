// Again, mapboxKey will be moved to produciton
const mapBoxKey =
  "pk.eyJ1IjoibW96ZWlueSIsImEiOiJjam5sem10ZHgxcW54M2tvc3NtcHhld2NnIn0.n4QBsl0uB1WRVF4h9TxATQ";

export const geocoder = query =>
  fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?country=us&types=place&access_token=${mapBoxKey}`
  ).then(res => {
    return res.json();
  });
