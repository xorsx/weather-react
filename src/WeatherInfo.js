import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city">{props.data.city}</h1>
            <div className="weather-app-details">
              <span>
                <FormattedDate date={props.data.date} />
              </span>
              <br />
              Humidity: <strong>{props.data.humidity}%</strong> Wind:
              <strong>{Math.round(props.data.wind)}mph</strong>
            </div>
          </div>
          <div className="weather-app-temperature-container">
            <div className="weather-app-icon">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <div className="weather-app-temperature-value">
              {Math.round(props.data.temperature)}
            </div>
            <div className="weather-app-temperature-unit">°F</div>
          </div>
        </div>

        <div className="weather-forecast">{props.data.description}</div>
      </main>
    </div>
  );
}
