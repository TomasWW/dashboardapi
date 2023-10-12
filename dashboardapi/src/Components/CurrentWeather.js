import React from "react";
import datosApi from "./climaApi";
import styled from "styled-components";
import weatherCodeInfo from "./weathercode";

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

function formatTime(inputTime) {
  const time = new Date(inputTime);
  const hours = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function formatDateTime(inputTime) {
  const time = new Date(inputTime);
  const day = time.getDate().toString().padStart(2, "0");
  const month = (time.getMonth() + 1).toString().padStart(2, "0"); // Los meses se indexan desde 0 (enero es 0)
  const year = time.getFullYear();
  const dateStr = `${day}/${month}/${year}`;
  const timeStr = formatTime(inputTime);
  return `${dateStr} ${timeStr}`;
}

function CurrentWeather() {
  const apiCurrentWeather = datosApi["current_weather"]["weathercode"];
  const apiCurrentTime = datosApi["current_weather"]["time"];
  const apiCurrentTemp = datosApi["current_weather"]["temperature"];
  const codeWeather = weatherCodeInfo[apiCurrentWeather].name;
  const logoWeather = weatherCodeInfo[apiCurrentWeather].image_src;
  const currentDateTime = formatDateTime(apiCurrentTime);
  return (
    <Weather>
      <p>{currentDateTime}</p>
      <img src={logoWeather} alt="Img" width={"25%"} />
      {codeWeather} {apiCurrentTemp}
    </Weather>
  );
}

export default CurrentWeather;
