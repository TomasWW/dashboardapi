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
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relativehumidity_2m,precipitation,weathercode,windspeed_10m&hourly=temperature_2m,visibility&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1`
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

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const data = await fetchWeatherData(latitude, longitude);
      const airQuality = await fetchAirQualityData(latitude, longitude);

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

  return (
    <div>
      <CityDataComponent onDataFetched={onDataFetched} />
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
            airQuality={
              airQualityData && airQualityData["current"]["european_aqi"]
            }
            airQualityUnits={
              airQualityData && airQualityData["hourly_units"]["pm10"]
            }
          />
        </DashboardClima>

        <DashboardTrafico
          selectedLine={selectedLine}
          setSelectedLine={setSelectedLine}
        />
      </div>
    </div>
  );
}

export default App;
