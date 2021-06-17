<template>
  <div class="weather">
    <img alt="Vue logo" src="../assets/mission.png" />
    <div v-if="forecast" class="weather-card">
      <h2>Davie, Fl</h2>
      <h1>{{ forecast.current.temp }} Deg F</h1>
      <h2>{{ forecast.hourly[0].humidity }} % Humidity</h2>
      <h2>Weather Conditions:</h2>
      <div class="icons">
        {{ descriptions[forecast.current.weather[0].description] }}
      </div>
      <h2>{{ forecast.current.weather[0].main }}</h2>
    </div>
  </div>
</template>

<script>
import weather from "../composables/weather";
export default {
  name: "Weather",
  data() {
    return {
      forecast: null,
      descriptions: {
        "clear sky": "🌈",
        "few clouds": "🌥",
        "scattered clouds": "💨",
        "broken clouds": "⛅️",
        "shower rain": "🌧",
        "light rain": "💦",
        "light thunderstorm ": "⛈",
        "heavy thunderstorm": "⛈",
        "drizzle rain": "🌧",
        "moderate rain": "🌨",
        "extreme rain": "🌨",
      },
    };
  },
  mounted() {
    weather.getForecast().then((result) => {
      console.log(result);
      this.forecast = result;
    });
  },
};
</script>

<style>
.weather-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  background-color: #ffc02a;
  border: 1px solid #39495c;
  border-radius: 25px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.weather {
  padding: 5px;
  min-height: 80vh;
  background-color: #171e29;
}
.icons {
  font-size: 4em;
}
</style>
