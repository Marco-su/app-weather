import "./WeatherForm.css";

const WeatherForm = ({ getWeather, setCity, setCountry }) => {
  const cities = require("../../json/countries.json");

  const changeCountry = (e) => {
    const country = cities.filter((item) => item.name === e.target.value);
    setCountry(country[0].code);
  };

  return (
    <div id="weather-form" className="container">
      <form onSubmit={getWeather} className="row">
        <div className="col-md-4 mb-3">
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            autoComplete="off"
            autoFocus
            required
          />
        </div>
        <div className="col-md-4 mb-3">
          <select name="country" onChange={changeCountry}>
            {cities.map((item, index) => (
              <option key={index}>{item.name}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4 mb-3">
          <button className="btn btn-warning">Get Weather</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherForm;
