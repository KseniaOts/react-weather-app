import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tallinn" />
        <footer>
          This project was coded by{" "}
          <a href="https://spectacular-boba-8a9fc7.netlify.app/">Ksenia Ots</a>{" "}
          and is{" "}
          <a
            href="https://github.com/KseniaOts/react-weather-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
