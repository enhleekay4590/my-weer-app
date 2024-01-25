function updateWeather(response) {
  let weatherTempreture = document.querySelector("#weather-temperature");
  let temperature = response.data.temperature.current;
  let cityNameElement = document.querySelector("#city-name");

  cityNameElement.innerHTML = response.data.city;
  weatherTempreture.innerHTML = Math.round(temperature);
}

function searchForCity(city) {
  let apiKey = "003ed39ao8f2b2339d6b100400t60f78";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function searchElement(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  searchForCity(searchInputElement.value);
}

let formElement = document.querySelector("#form-info");
formElement.addEventListener("submit", searchElement);

searchForCity("Cape Town");
