import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )} degrees celcius`
    );
  }

  let apiKey = "c6f8ef4575250284954db9f4dfa7a996&units=metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from weather</h2>;
}
