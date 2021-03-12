import "./App.css";
import { useState } from "react";
import axios from "axios";

import WeatherForm from "./components/weatherForm/WeatherForm";
import WeatherInfo from "./components/weatherInfo/WeatherInfo";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("AF");
  const [data, setData] = useState({});
  const [reqError, setReqError] = useState(false);

  const getWeather = async (e) => {
    e.preventDefault();

    const apiCity = city.trim().toLocaleLowerCase().replace(/\s/g, "+");
    const apiCountry = country.toLocaleLowerCase();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${apiCity},${apiCountry}&appid=aea2566734b1fcc1e246c527e450134b&units=metric`;

    await axios({
      url: API,
    })
      .then((res) => {
        setReqError(false);
        setData(res.data);
      })
      .catch(() => {
        setData({});
        setReqError(true);
      });
  };

  return (
    <div className="App">
      <WeatherForm
        getWeather={getWeather}
        setCity={setCity}
        setCountry={setCountry}
      />
      <WeatherInfo data={data} reqError={reqError} />
    </div>
  );
}

export default App;
