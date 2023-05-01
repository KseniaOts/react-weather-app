import React from "react";
import FormatDate from "./FormatDate";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city}</h1>
      <span className="temperature">{Math.round(props.data.temperature)}</span>
      <span className="unit">°C/°F</span>
      <img src={props.data.iconUrl} alt={props.data.description} />
      <ul>
        <li>
          <FormatDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>

        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind} km/h</li>
      </ul>
    </div>
  );
}
