import React from "react";
import styled from "styled-components";

// Importa imágenes y otros componentes necesarios
import GREENCODE from "../assets/code-green.svg";
import ORANGECODE from "../assets/code-orange.svg";
import REDCODE from "../assets/code-red.svg";
import HUMIDITY from "../assets/humidity.svg";
import SUNRISE from "../assets/sunrise.svg";
import SUNSET from "../assets/sunset.svg";
import WIND0 from "../assets/wind-beaufort-0.svg";
import WIND1 from "../assets/wind-beaufort-1.svg";
import WIND5 from "../assets/wind-beaufort-5.svg";
import WIND10 from "../assets/wind-beaufort-10.svg";
import UV0 from "../assets/uv-index.svg";
import UV1 from "../assets/uv-index-1.svg";
import UV5 from "../assets/uv-index-5.svg";
import UV10 from "../assets/uv-index-10.svg";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  width: 100%;
  
  text-align: center;
`;

const Title = styled.div`
  margin: 0;
`;

const TomCard = styled(Card)`
  width: 100%;
  height: 85%;
  font-size: calc(6px + 1vh);
  padding: 0%;
  margin: 0%;
`;

// Función para seleccionar la imagen del viento según la velocidad
const selectWindImage = (windStatus) => {
  if (windStatus === 0) {
    return WIND0;
  } else if (windStatus >= 1 && windStatus < 5) {
    return WIND1;
  } else if (windStatus >=5 && windStatus < 10) {
    return WIND5;
  } else if (windStatus >= 10) {
    return WIND10;
  }
  return null;
};

// Función para seleccionar la imagen del índice UV según el valor
const selectUVIndexImage = (uvIndex) => {
  if (uvIndex === 0) {
    return UV0;
  } else if (uvIndex >= 1 && uvIndex < 5) {
    return UV1;
  } else if (uvIndex >= 5 && uvIndex < 10) {
    return UV5;
  } else if (uvIndex >= 10) {
    return UV10;
  }
  return null;
};

// Función para definir el código de color de visibilidad
const visibilityOp = (visibility) => {
  if (visibility >= 1000) {
    return GREENCODE;
  } else if (visibility < 1000 && visibility >= 500) {
    return ORANGECODE;
  } else if (visibility < 500) {
    return REDCODE;
  }
};
const airQualityImg = (airQuality) => {
  if (airQuality <= 20) {
    return "Buena";
  } else if (airQuality > 20 && airQuality <= 40) {
    return "Aceptable";
  } else if (airQuality > 40 && airQuality <= 50) {
    return "Moderada";
  } else if (airQuality > 50 && airQuality <= 100) {
    return "Mala";
  } else if (airQuality > 100 && airQuality <= 150) {
    return "Muy Mala";
  } else if (airQuality > 150) {
    return "Extremadamente Mala";
  }
};

// Función para formatear la hora desde un objeto de fecha
function formatTimeFromDate(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

export function Highlights({
  uvIndex,
  windStatus,
  sunrise,
  sunset,
  humidity,
  visibility,
  tempMax,
  tempMin,
  airQuality,
  airQualityUnits,
}) {
  const windImage = selectWindImage(windStatus);
  const visibilityImg = visibilityOp(visibility);
  const UVIMG = selectUVIndexImage(uvIndex);

  return (
    <div>
      <Title>Rosario</Title>
      <Box>
        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}>UV INDEX</Card.Header>
          <Card.Body>
            <Card.Text>
              {uvIndex}
              <img src={UVIMG} alt="UV" width={"25%"} />
            </Card.Text>
          </Card.Body>
        </TomCard>
        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}> Viento </Card.Header>
          <Card.Body>
            <Card.Text>
              {windStatus} Km/h
              <img src={windImage} alt="Wind" width={"25%"} />
            </Card.Text>
          </Card.Body>
        </TomCard>

        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}>
            Amanecer / Anocher
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {formatTimeFromDate(new Date(sunrise))}
              <img src={SUNRISE} alt="Sunrise" width={"25%"} />
              {formatTimeFromDate(new Date(sunset))}
              <img src={SUNSET} alt="sunset" width={"25%"} />
            </Card.Text>
          </Card.Body>
        </TomCard>

        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}>
            {" "}
            Humedad / Visibilidad{" "}
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {humidity} <img src={HUMIDITY} alt="Humidity" width={"25%"} />
              <br />
              {parseFloat(visibility) / 1000} Km
              <img src={visibilityImg} alt="Vis" width={"20%"} />
            </Card.Text>
          </Card.Body>
        </TomCard>

        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}>
            Calidad del Aire
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {airQuality} {airQualityUnits} <br />
               {airQualityImg(airQuality)}
            </Card.Text>
          </Card.Body>
        </TomCard>
        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}>
            Temperatura
          </Card.Header>
          <Card.Body>
            <Card.Text>
              Max {tempMax} <FaTemperatureArrowUp />
              <br />
              Min {tempMin} <FaTemperatureArrowDown />
            </Card.Text>
          </Card.Body>
        </TomCard>
      </Box>
    </div>
  );
}
