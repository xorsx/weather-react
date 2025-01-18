import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setunit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setunit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setunit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div>
        <span className="weather-app-temperature-value">
          {Math.round(props.celcius)}
        </span>
        <span className="weather-app-temperature-unit">°C |</span>{" "}
        <span className="weather-app-temperature-unit">
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div>
        <span className="weather-app-temperature-value">
          {Math.round(fahrenheit)}
        </span>
        <span className="weather-app-temperature-unit">°F |</span>
        <span className="weather-app-temperature-unit">
          {" "}
          <a href="/" onClick={showCelcius}>
            °C
          </a>{" "}
        </span>{" "}
      </div>
    );
  }
}
