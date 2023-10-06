import { useState } from "react";
import React from "react";
import UVIMG from "../assets/uv-index-1.svg";
import styled from "styled-components";
import HUMIDITY from "../assets/humidity.svg";
import WIND from "../assets/wind-beaufort-5.svg";
import SUNRISE from "../assets/sunrise.svg";

import SUNSET from "../assets/sunset.svg";
const Card = styled.div`
  background-color: oldlace;
  border: 1px solid red;
  font-size: calc(5px + 1vmin);
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Divide en 3 columnas */
  gap: 10px; /* Espacio entre las tarjetas */
  width: 100%;
  height: 100%;
  
`;
export function Highlights({
  uvIndex,
  windStatus,
  sunrise,
  sunset,
  humidity,
  visibility,
  airQuality,
}) {
  return (
    <div>
      <h3>Highlights</h3>
      <Box>
        <Card>
          <p>Indice UV </p>
          <p>
            {" "}
            {uvIndex}
            <img src={UVIMG} width="30" alt="uvIndex" />
          </p>
        </Card>
        <Card>
          <p>Viento</p>
          <p>
            {windStatus}
            <img src={WIND} width="30" alt="wind" />
          </p>
        </Card>
        <Card>
          <p>
            <img src={SUNRISE} alt="sunrise" width="30" /> {sunrise}
          </p>
          <p>
            {" "}
            <img src={SUNSET} alt="sunset" width="30" /> {sunset}
          </p>
        </Card>
        <Card>
          <p>Humedad </p>
          <p>
            {" "}
            {humidity} <img src={HUMIDITY} width="30" alt="hum" />{" "}
          </p>
        </Card>
        <Card>
          <p>Visibilidad </p>
          <p> {visibility}</p>
        </Card>
        <Card>
          <p>Calidad Aire </p>
          <p> {airQuality}</p>
        </Card>
      </Box>
    </div>
  );
}
