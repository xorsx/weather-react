import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      <span className="weather-app-temperature-value">
        {Math.round((props.celcius * 9) / 5 + 32)}
      </span>
      <span className="weather-app-temperature-unit">°F</span>
    </div>
  );
}
