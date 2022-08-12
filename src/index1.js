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

//🕵️‍♀️Feature #2
//Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#inputCity");

  let displayCity = document.querySelector("#display-city");
  displayCity.innerHTML = `${searchInput.value}`;
}

let formData = document.querySelector("#search-form");
formData.addEventListener("submit", search);

//🙀Bonus Feature
//Display a fake temperature (i.e 17) in Celsius and add a link to convert it to Fahrenheit. When clicking on it, it should convert the temperature to Fahrenheit. When clicking on Celsius, it should convert it back to Celsius.

function showCelliy(event) {
  event.preventDefault();

  showTemperature.innerHTML = `${cellTemperature}`;
}

function showFahrengate(event) {
  event.preventDefault();

  showTemperature.innerHTML = `${farhreitTemperature}`;
}

let cellTemperature = Number("17");
console.log(cellTemperature);
let farhreitTemperature = Math.round((cellTemperature * 9) / 5 + 32);
console.log(farhreitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", showCelliy);

let fahrenheitLink = document.querySelector("#fahrengeit-link");
fahrenheitLink.addEventListener("click", showFahrengate);

let showTemperature = document.querySelector(".temperature");

/*let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

/*let city = prompt("Enter a city");
city = city.trim().toLowerCase().replace("tokio", "tokyo");

if (city === "paris") {
  let sentence = `It is currently ${weather.paris.temp} °C in ${
    Object.keys(weather)[0]
  } wilth a humidity of ${weather.paris.humidity}%`;
  alert(sentence);
} else if (city === "tokyo") {
  let sentence = `It is currently ${weather.tokyo.temp} °C in ${
    Object.keys(weather)[1]
  } wilth a humidity of ${weather.tokyo.humidity}%`;
  alert(sentence);
} else if (city === "lisbon") {
  let sentence = `It is currently ${weather.lisbon.temp} °C in ${
    Object.keys(weather)[2]
  } wilth a humidity of ${weather.lisbon.humidity}%`;
  alert(sentence);
} else if (city === "san francisco") {
  let sentence = `It is currently ${weather["san francisco"].temp} °C in ${
    Object.keys(weather)[3]
  } wilth a humidity of ${weather["san francisco"].humidity}%`;
  alert(sentence);
} else if (city === "oslo") {
  let sentence = `It is currently ${weather.oslo.temp} °C in ${
    Object.keys(weather)[4]
  } wilth a humidity of ${weather.oslo.humidity}%`;
  alert(sentence);
} else {
  alert(
    "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
  );
}
 */

/*let city = prompt("Please, enter a city");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let humidity = weather[city].humidity;
  let celsusTemperature = Math.round(temperature);
  let farhreitTemperature = Math.round((temperature * 9) / 5 + 32);

  alert(
    `It is currently ${celsusTemperature}°C (${farhreitTemperature}°F) in ${city} with a humiditi of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city} `
  );
}
*/
