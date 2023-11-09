import React, { useEffect, useState } from "react";
import { Highlights } from "./Components/Highlights";
import DashboardClima from "./Components/DashboardClima";
import Thermometer from "./Components/Thermometer";
import CurrentWeather from "./Components/CurrentWeather";
import DailyTemp from "./Components/DailyTemp";
import DashboardTrafico from "./Components/DashboardTrafico";
import "./App.css";
import CityDataComponent from "./Components/CityDataComponent";

async function fetchWeatherData(latitude, longitude) {
  try {
    const response = await fetch(
      ` https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&forecast_days=1`
    );

    if (!response.ok) {
      throw new Error("Error al obtener datos de la API del clima");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function fetchAirQualityData(latitude, longitude) {
  try {
    const response = await fetch(
      `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=european_aqi&hourly=pm10,european_aqi&timezone=America%2FSao_Paulo&forecast_days=1`
    );

    if (!response.ok) {
      throw new Error("Error al obtener datos de la API de calidad del aire");
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
  const [airQualityData, setAirQualityData] = useState(null);
  const [selectedLine, setSelectedLine] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      setIsLoading(true);
      const data = await fetchWeatherData(latitude, longitude);
      const airQuality = await fetchAirQualityData(latitude, longitude);
      setIsLoading(false);
      if (data) {
        setWeatherData(data);
      }

      if (airQuality) {
        setAirQualityData(airQuality);
      }
    };
    fetchDataAndSetState();
  }, [latitude, longitude]);

  const onDataFetched = (latitude, longitude) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  // Verificar si no se tienen datos de clima y calidad del aire
  const hasData = weatherData && airQualityData;

  return (
    <div>
      <CityDataComponent
        onDataFetched={onDataFetched}
        isDay={weatherData && weatherData["current"]["is_day"]}
      />
      {isLoading ? (
        <div className="loading-indicator">Cargando...</div>
      ) : hasData ? (
        <div className="App">
          <DashboardClima className="dashbordclima">
            <Thermometer
              className="therm"
              currentTemp={
                weatherData && weatherData["current"]["temperature_2m"]
              }
            />
            <DailyTemp
              className="chart"
              apiHourlyTime={weatherData && weatherData["hourly"]["time"]}
              apiHourlyTemp={
                weatherData && weatherData["hourly"]["temperature_2m"]
              }
            />
            <CurrentWeather
              className="maxmin"
              currentTemp={
                weatherData && weatherData["current"]["temperature_2m"]
              }
              apiCurrentWeather={
                weatherData && weatherData["current"]["weather_code"]
              }
              apiCurrentDateTime={weatherData && weatherData["current"]["time"]}
            />

            <Highlights
              className="cards"
              uvIndex={weatherData && weatherData["daily"]["uv_index_max"]}
              sunrise={weatherData && weatherData["daily"]["sunrise"]}
              sunset={weatherData && weatherData["daily"]["sunset"]}
              windStatus={
                weatherData && weatherData["current"]["wind_speed_10m"]
              }
              visibility={weatherData && weatherData["hourly"]["visibility"][0]}
              tempMax={
                weatherData && weatherData["daily"]["temperature_2m_max"]
              }
              tempMin={
                weatherData && weatherData["daily"]["temperature_2m_min"]
              }
              humidity={
                weatherData && weatherData["current"]["relative_humidity_2m"]
              }
              airQuality={
                airQualityData && airQualityData["current"]["european_aqi"]
              }
              airQualityUnits={
                airQualityData && airQualityData["hourly_units"]["pm10"]
              }
            />
          </DashboardClima>
        </div>
      ) : (
        // Mostrar solo la selección de ciudad cuando no hay datos
        <div className="no-data-background">
          Seleccione su ciudad para obtener datos de clima.
        </div>
      )}
      <DashboardTrafico
        selectedLine={selectedLine}
        setSelectedLine={setSelectedLine}
      />
    </div>
  );
}

export default App;
