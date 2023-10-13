import React, { useEffect, useState } from "react";
import { Highlights } from "./Components/Highlights";
import DashboardClima from "./Components/DashboardClima";
import Thermometer from "./Components/Thermometer";
import CurrentWeather from "./Components/CurrentWeather";
import DailyTemp from "./Components/DailyTemp";
import DashboardTrafico from "./Components/DashboardTrafico";
import "./App.css";
async function fetchData() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/dwd-icon?latitude=52.52&longitude=13.41&current=temperature_2m,relativehumidity_2m,weathercode,windspeed_10m&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=America%2FSao_Paulo&forecast_days=1"
    );
    if (!response.ok) {
      throw new Error("Error al obtener datos de la API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await fetchData();
      if (data) {
        setWeatherData(data);
      }
    };
    fetchDataAndSetState();
  }, []);

  return (
    <div className="App">
      <DashboardClima className="dashbordclima">
        <Thermometer
          className="therm"
          currentTemp={weatherData && weatherData["current"]["temperature_2m"]}
        />
        <DailyTemp className="chart" />
        <CurrentWeather
          className="maxmin"
          currentTemp={weatherData && weatherData["current"]["temperature_2m"]}
          apiCurrentWeather = {weatherData && weatherData["current"]["weathercode"]}
          apiCurrentDateTime = {weatherData && weatherData["current"]["time"]}

        />

        <Highlights
          className="cards"
          uvIndex="UV 1 "
          sunrise="6am"
          sunset="20pm"
          humidity="30"
          visibility="Baja"
          airQuality="105 Malo"
          windStatus="Fuertes"
        />
      </DashboardClima>
      <DashboardTrafico>Datos de Tráfico</DashboardTrafico>
    </div>
  );
}

export default App;
