import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo d-flex">
      <div className="weather-app-data">
        <h1 className="weather-app-city">{props.data.city}</h1>
        <div>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
          </ul>
        </div>

        <div className="weather-app-details">
          <ul>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>
            </li>
            <li>
              Wind:
              <strong>{Math.round(props.data.wind)}mph</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="weather-app-temperature-container">
        <div className="weather-app-icon">
          <WeatherIcon
            code={props.data.icon}
            alt={props.data.description}
            size={52}
          />
        </div>
        <WeatherTemperature celcius={props.data.temperature} />
      </div>
    </div>
  );
}
