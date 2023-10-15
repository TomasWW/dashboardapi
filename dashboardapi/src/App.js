import React, { useEffect, useState } from "react";
import { Highlights } from "./Components/Highlights";
import DashboardClima from "./Components/DashboardClima";
import Thermometer from "./Components/Thermometer";
import CurrentWeather from "./Components/CurrentWeather";
import DailyTemp from "./Components/DailyTemp";
import DashboardTrafico from "./Components/DashboardTrafico";
import "./App.css";
// Función asincrónica para obtener datos del clima desde la API
async function fetchData() {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-32.9468&longitude=-60.6393&current=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m&hourly=temperature_2m,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1"
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
        <DailyTemp
          className="chart"
          apiHourlyTime={weatherData && weatherData["hourly"]["time"]}
          apiHourlyTemp={weatherData && weatherData["hourly"]["temperature_2m"]}
        />
        <CurrentWeather
          className="maxmin"
          currentTemp={weatherData && weatherData["current"]["temperature_2m"]}
          apiCurrentWeather={
            weatherData && weatherData["current"]["weathercode"]
          }
          apiCurrentDateTime={weatherData && weatherData["current"]["time"]}
        />

        <Highlights
          className="cards"
          uvIndex={weatherData && weatherData["daily"]["uv_index_max"]}
          sunrise={weatherData && weatherData["daily"]["sunrise"]}
          sunset={weatherData && weatherData["daily"]["sunset"]}
          windStatus={weatherData && weatherData["current"]["windspeed_10m"]}
          visibility={weatherData && weatherData["hourly"]["visibility"][0]}
          tempMax={weatherData && weatherData["daily"]["temperature_2m_max"]}
          tempMin={weatherData && weatherData["daily"]["temperature_2m_min"]}
          humidity={
            weatherData && weatherData["current"]["relativehumidity_2m"]
          }
        />
      </DashboardClima>
      <DashboardTrafico>Datos de Tráfico</DashboardTrafico>
    </div>
  );
}

export default App;
