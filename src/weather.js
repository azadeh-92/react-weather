import React from "react";
import "./styles.css";

export default function Weather() {
  let weather = {
    city: "Tehran",
    temp: "31",
    wind: "6",
    hum: "80",
    dis: "Mostly Cloudy"
  };
  return (
    <div className="App">
      <div className="container">
        <div className="weatherapp">
          <div className="input-group mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            ></input>
            <button className="btn btn-outline-secondary" type="button">
              🔎
            </button>
            <button className="btn btn-outline-secondary" type="button">
              📍
            </button>
          </div>

          <div className="container text-center">
            <div className="row detail">
              <div className="col-6 aval">{weather.city}</div>
              <div className="col-6 dovom">
                <img
                  className="abr"
                  src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png"
                  alt=""
                  width="100px"
                ></img>
              </div>
              <div className="col-6 sevom">
                <span className="deg">{weather.temp}</span>
                <span className="degree">
                  <a href="/" className="tosels disabled-link">
                    °C |
                  </a>
                  <a href="/" className="tofar">
                    °F
                  </a>
                </span>
              </div>
              <div className="col-6 char ">
                <ul>
                  <li className="condition"> {weather.dis}</li>
                  <li className="wind"> wind: {weather.wind} Km/h </li>
                  <li className="humidity">humidity: {weather.hum}%</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row forcast">
            <div className="container text-center">
              <div className="row rooz">
                <div className="col">SUN</div>
                <div className="col">MON</div>
                <div className="col">TUE</div>
                <div className="col">WED</div>
                <div className="col">THU</div>
              </div>
            </div>
          </div>

          <div className="container text-center">
            <div className="row dama">
              <div className="col">47°</div>
              <div className="col">36°</div>
              <div className="col">42°</div>
              <div className="col">39°</div>
              <div className="col">40°</div>
            </div>
          </div>
        </div>
      </div>
      <p>
        <a href="https://github.com/azadeh-92/shecodes_project" target="_blank">
          open-sourse code
        </a>{" "}
        by Azade{" "}
      </p>
    </div>
  );
}
