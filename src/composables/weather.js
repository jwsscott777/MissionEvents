//const APIKEY = "9831a0a4b984879995f5de83ee964b3d";

//const proxy = "https://cors-anywhere.herokuapp.com/";

const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=26.0765&lon=-80.2521&units=imperial&appid=76a0586abca2918addd45d6e7f97081d`;

function getForecast() {
  return fetch(API_URL).then((response) => response.json());
}

export default { getForecast };
