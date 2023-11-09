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

// Función para formatear la fecha
function formatDate(inputTime) {
  const time = new Date(inputTime);
  const day = time.getDate().toString().padStart(2, "0");
  const month = (time.getMonth() + 1).toString().padStart(2, "0");
  const year = time.getFullYear();
  const dateStr = `${day}/${month}/${year}`;
  return dateStr;
}
function CurrentWeather({ apiCurrentWeather, apiCurrentDateTime }) {
  
  // Obtiene información del clima a partir del código proporcionado
  const codeWeatherInfo = weatherCodeInfo[apiCurrentWeather];
  // Si la información está disponible, se obtiene el nombre y la imagen, de lo contrario, se usa "Desconocido"
  const codeWeather = codeWeatherInfo ? codeWeatherInfo.name : "Desconocido";
  const logoWeather = codeWeatherInfo ? codeWeatherInfo.image_src : "";

  // Formatea la fecha actual
  const currentDate = formatDate(apiCurrentDateTime);

  return (
    <div>

    <Weather>
      <p>{currentDate}</p> 
      {codeWeather}
      <img src={logoWeather} alt="Img" width={"25%"} />
    </Weather>
    </div>
  );
}

export default CurrentWeather;

