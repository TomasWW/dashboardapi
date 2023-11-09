import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import isDayImg from "../assets/clear-day.svg";
import isNightImg from "../assets/moon-last-quarter.svg";
function CityDataComponent({ onDataFetched, isDay }) {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [localTime, setLocalTime] = useState(null);
  const weatherImage = isDay ? isDayImg : isNightImg;
  const handleCityChange = (e) => {
    setCity(e.target.value);
    fetchWeatherData(city);
  };

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=5&language=es&format=json`
      );

      if (!response.ok) {
        throw new Error("Error al obtener datos climáticos");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCitySelect = (e) => {
    const selectedIndex = e.target.value;
    const selectedCityData = weatherData.results[selectedIndex];

    if (selectedCityData) {
      setSelectedCity(selectedCityData);

      const latitude = selectedCityData.latitude;
      const longitude = selectedCityData.longitude;

      const localDateTime = DateTime.now().setZone(selectedCityData.timezone);

      setLocalTime(localDateTime);

      onDataFetched(latitude, longitude);
    }
  };

  useEffect(() => {
    if (weatherData) {
      console.log("Datos climáticos:", weatherData);
    }
  }, [weatherData]);

  return (
    <div>
      <label htmlFor="cityInput">Ingrese una ciudad: </label>
      <input
        type="text"
        id="cityInput"
        value={city}
        onChange={handleCityChange}
      />

      {weatherData && weatherData.results && weatherData.results.length > 0 && (
        <select onChange={handleCitySelect}>
          <option value="" enabled>
            Selecciona una ciudad
          </option>
          {weatherData.results.map((city, index) => (
            <option key={index} value={index}>
              {city.name} ({city.country})
            </option>
          ))}
        </select>
      )}
      {selectedCity && (
        <div>
          Ciudad: {selectedCity.name} ({selectedCity.country}) ----{" "}
          {localTime.toFormat("hh:mm a")}{" "}
          
            <img src={weatherImage} alt="Img" width={"2%"} />
          
        </div>
      )}
    </div>
  );
}

export default CityDataComponent;
