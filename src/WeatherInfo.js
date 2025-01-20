import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
              <div className="humidity">
                Humidity: <strong>{props.data.humidity}%</strong>
              </div>
              <div className="wind">
                Wind:
                <strong>{Math.round(props.data.wind)}mph</strong>
              </div>
            </div>
          </div>
          <div className="weather-app-temperature-container">
            <div className="weather-app-icon">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>

            <WeatherTemperature celcius={props.data.temperature} />
          </div>
        </div>

        <div className="weather-forecast">{props.data.description}</div>
      </main>
    </div>
  );
}
