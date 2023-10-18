import React from "react";
import styled from "styled-components";
import weatherCodeInfo from "./weathercode";

// Estilización del componente
const Weather = styled.div`
  display: flex;
  flex-direction: column;
  font-size: calc(5px + 1vmin);
  max-height: 80%;
  border: 1px solid black;
  border-radius: 15px;
  margin-left: 20%;
  margin-right: 20%;
  align-items: center;
`;

// Función para formatear la hora
function formatTime(inputTime) {
  const time = new Date(inputTime);
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

// Función para formatear la fecha y hora
function formatDateTime(inputTime) {
  const time = new Date(inputTime);
  const day = time.getDate().toString().padStart(2, "0");
  const month = (time.getMonth() + 1).toString().padStart(2, "0");
  const year = time.getFullYear();
  const dateStr = `${day}/${month}/${year}`;
  const timeStr = formatTime(inputTime);
  return `${dateStr} ${timeStr}`;
}

function CurrentWeather({ apiCurrentWeather, apiCurrentDateTime }) {
  // Obtiene información del clima a partir del código proporcionado
  const codeWeatherInfo = weatherCodeInfo[apiCurrentWeather];
  // Si la información está disponible, se obtiene el nombre y la imagen, de lo contrario, se usa "Desconocido"
  const codeWeather = codeWeatherInfo ? codeWeatherInfo.name : "Desconocido";
  const logoWeather = codeWeatherInfo ? codeWeatherInfo.image_src : "";
  // Formatea la fecha y hora actual
  const currentDateTime = formatDateTime(apiCurrentDateTime);
  
  return (
    <Weather>
      <p>{currentDateTime }</p>

      {codeWeather}

      <img src={logoWeather} alt="Img" width={"25%"} />
    </Weather>
  );
}

export default CurrentWeather;
