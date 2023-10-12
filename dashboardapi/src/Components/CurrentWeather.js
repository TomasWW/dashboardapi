import React from "react";
import datosApi from "./climaApi";
import styled from "styled-components";
import weatherCodeInfo from "./weathercode";

const Weather = styled.div`
  display: flex;
  font-size: calc(5px + 1vmin);
  max-height: 80%;
  align-items: center;
`;

function formatDateTime(inputDate) {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Los meses se indexan desde 0 (enero es 0)
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function CurrentWeather() {
  const apiCurrentWeather = datosApi["current_weather"]["weathercode"];
  const apiCurrentTime = datosApi["current_weather"]["time"];
  const codeWeather = weatherCodeInfo[apiCurrentWeather].name;
  const logoWeather = weatherCodeInfo[apiCurrentWeather].image_src;
  const currentDateTime = formatDateTime(apiCurrentTime);
  return (
    <>
      <Weather>
        <p>
          {codeWeather}
          <img src={logoWeather} alt="Img" />
        </p>
        <p>{currentDateTime}</p>
      </Weather>
    </>
  );
}

export default CurrentWeather;
