//⏰Feature #1
//In your project, display the current date and time using JavaScript: Tuesday 16:00

let currentDate = new Date();
let dateToday = document.querySelector("#dateToday");
let date = currentDate.getDate();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thuesday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];

let months = [
  "January",
  "Fabruary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Nowember",
  "December",
];
let Month = months[currentDate.getMonth()];

let hour = currentDate.getHours();
let minutes = currentDate.getMinutes();
let year = currentDate.getFullYear();
dateToday.innerHTML = `Today is ${day}, ${date}th of ${Month}, ${year}, ${hour}:${minutes}`;

function searchCity(city) {
  let apiKey = "f610b409ce74bfc0ad6c2a79b83af47e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherConditions);
}

function handelSubmit(event) {
  event.preventDefault();

  let city = document.querySelector("#inputCity").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "f610b409ce74bfc0ad6c2a79b83af47e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherConditions);
}

function getCurrentLocation(event) {
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function displayWeatherConditions(response) {
  console.log(response.data);
  document.querySelector("#display-city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

let apiKey = "f610b409ce74bfc0ad6c2a79b83af47e";

let formData = document.querySelector("#search-form");
formData.addEventListener("submit", handelSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Berlin");
