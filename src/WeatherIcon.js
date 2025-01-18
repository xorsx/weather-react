import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png":
      "CLEAR_DAY",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png":
      "CLEAR_NIGHT",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png":
      "PARTLY_CLOUDY_DAY",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-night.png":
      "PARTLY_CLOUDY_NIGHT",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png":
      "PARTLY_CLOUDY_DAY",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-night.png":
      "PARTLY_CLOUDY_NIGHT",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png":
      "CLOUDY",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png":
      "CLOUDY",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-day.png":
      "RAIN",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/shower-rain-night.png":
      "RAIN",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png":
      "RAIN",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-night.png":
      "RAIN",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/thunderstorm-day.png":
      "RAIN",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/thunderstorm-night.png":
      "RAIN",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-day.png":
      "SNOW",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/snow-night.png":
      "SNOW",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png":
      "FOG",
    "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-night.png":
      "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]} // Directly map URL to icon code
      color="black"
      size={64}
      animate={true}
    />
  );
}
