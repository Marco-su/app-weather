import { useState, useEffect } from "react";
import "./WeatherInfo.css";

const WeatherInfo = ({ data, reqError }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (data.main) {
      const desLC = data.weather[0].description;
      const desUC = desLC.charAt(0).toUpperCase() + desLC.slice(1);
      setDescription(desUC);
    }
  }, [data]);

  return (
    <>
      {data.main ? (
        <div id="weather-info">
          <h1>
            <span>
              <i className="fas fa-map-marker-alt"></i>{" "}
            </span>
            {data.name}
          </h1>
          <div>
            <div>
              <h3>
                <span>
                  <i className="fas fa-temperature-high"></i>{" "}
                </span>
                Temperature
              </h3>
              <ul>
                <li>Min: {data.main.temp_min} °C</li>
                <li>Max: {data.main.temp_max} °C</li>
              </ul>
            </div>
            <div>
              <h3>
                <span>
                  <i className="fas fa-tint"></i>{" "}
                </span>
                Humidity
              </h3>
              <p>{data.main.humidity}%</p>
            </div>
          </div>
          <h4>
            <span>
              <i className="fas fa-cloud"></i>{" "}
            </span>
            {description}
          </h4>
        </div>
      ) : null}
      {reqError ? (
        <span id="error-message" className="text-danger">
          Failed to get data.
        </span>
      ) : null}
    </>
  );
};

export default WeatherInfo;
