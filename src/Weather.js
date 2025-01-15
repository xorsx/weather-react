import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png",
      date: "Wednesday 7:00p.m.",
    });
  }

  if (weatherData.ready) {
    return (
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city">{weatherData.city}</h1>
            <p className="weather-app-details">
              <span>{weatherData.date}</span>
              <br />
              Humidity: <strong>{weatherData.humidity}%</strong> Wind:
              <strong>{Math.round(weatherData.wind)}mph</strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div>
              <img src={weatherData.iconUrl} alt="weather icon" />
            </div>
            <div className="weather-app-temperature-value">
              {Math.round(weatherData.temperature)}
            </div>
            <div className="weather-app-temperature-unit">°F</div>
          </div>
        </div>

        <div className="weather-forecast">{weatherData.description}</div>
      </main>
    );
  } else {
    const apiKey = "e7fo6tea7dab2f64b9d0694388b0ea0f";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }

  // let weatherData = {
  //   city: "Denver",
  //   humidity: 20,
  //   wind: 15,
  //   temperature: 45,
  //   forecast: "Snowy",
  //   datetime: "Last updated: Wednesday 5:30p.m.",
  //   icon: "",
  // };
}
