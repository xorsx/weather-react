import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Denver",
    humidity: 20,
    wind: 15,
    temperature: 45,
    forecast: "Snowy",
    datetime: "Last updated: Wednesday 5:30p.m.",
    icon: "",
  };
  return (
    <main>
      <div className="weather-app-data">
        <div>
          <h1 className="weather-app-city">{weatherData.city}</h1>
          <p className="weather-app-details">
            <span>{weatherData.datetime}</span>
            <br />
            Humidity: <strong>{weatherData.humidity}%</strong> Wind:
            <strong>{weatherData.wind}mph</strong>
          </p>
        </div>
        <div className="weather-app-temperature-container">
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAUlJREFUaN7t2cGxgjAQgGFKsIRXAiVQgiVQgiWkBEqwFErg+t8ogQ7iJTiKPscNuzHRZGYvzKzul1mWMDTe+6bkKLr4CsgSIFlAC7hNtI3hUgGEwifA/xOTFWQ3AOhfFL6NPisA0AmKX6PNCTBFAMYsAKHvfWScgXlzbQYG4JAK4HYAXsUCHFMABiPAGsfSAcs77RQFAA6hj71xDOqA0PtLguI9MKsBwq5PiQq/hiYgefFqAMORaQ8IrbN8CvDkUNhLAX0mxd89ySUAlyHgOmJLBnjgr3TAqXSAewfQFg0Iz4Gx2Bba8eqYx02c+4o9Tjugi/lD7dxYgAdcZBGquSLAs5Eq3D31XCmgu/mxUbKTVrm/1UJfM4UqoAIMAevEiLxJxbkWACeZ8XtztT8xPRx3rXO1Ae7m6C0688Tmfn8L1e/EFVABFZA0LkcjEH9Eoxa+AAAAAElFTkSuQmCC"
              alt="weather icon"
            />
          </div>
          <div className="weather-app-temperature-value">
            {weatherData.temperature}
          </div>
          <div className="weather-app-temperature-unit">°F</div>
        </div>
      </div>

      <div className="weather-forecast">{weatherData.forecast}</div>
    </main>
  );
}
