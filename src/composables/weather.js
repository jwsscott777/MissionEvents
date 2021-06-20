//const APIKEY = "9831a0a4b984879995f5de83ee964b3d";

//const proxy = "https://cors-anywhere.herokuapp.com/";

// gabe key = a0e251ec290350f207d4ec302140fa1c

const API_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=26.0765&lon=-80.2521&units=imperial&appid=a0e251ec290350f207d4ec302140fa1c`;

function getForecast() {
  return fetch(API_URL).then((response) => response.json());
}

export default { getForecast };
