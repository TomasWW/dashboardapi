import React from "react";
import styled from "styled-components";
import { TbUvIndex } from "react-icons/tb";

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

import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;

  text-align: center;
`;

const Title = styled.div`
  margin: 0;
`;

const TomCard = styled(Card)`
  width: 100%;
  font-size: calc(10px + 1vh);
  padding: 0em;
`;
const selectWindImage = (windStatus) => {
  if (windStatus === 0) {
    return WIND0;
  } else if (windStatus >= 1 && windStatus < 5) {
    return WIND1;
  } else if (windStatus === 5) {
    return WIND5;
  } else if (windStatus >= 10) {
    return WIND10;
  }
  return null;
};
const visibilityOp = (visibility) => {
  if (visibility >= 1000) {
    return GREENCODE;
  } else if (visibility < 1000 && visibility >= 500) {
    return ORANGECODE;
  } else if (visibility < 500) return REDCODE;
};

export function Highlights({
  uvIndex,
  windStatus,
  sunrise,
  sunset,
  humidity,
  visibility,
  tempMax,
  tempMin,
}) {
  const windImage = selectWindImage(windStatus);
  const visibilityImg = visibilityOp(visibility);
  return (
    <div>
      <Title>Highlights</Title>
      <Box>
        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}>
            {" "}
            UV INDEX{" "}
          </Card.Header>
          <Card.Body>
            <Card.Text>{uvIndex}</Card.Text>
            <TbUvIndex />
          </Card.Body>
        </TomCard>
        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}> VIENTO </Card.Header>
          <Card.Body>
            <Card.Text>{windStatus}</Card.Text>
            <img src={windImage} alt="Wind" width={"25%"} />
          </Card.Body>
        </TomCard>

        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}>
            {" "}
            Amanecer / Anocher{" "}
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>
                {sunrise} <img src={SUNRISE} alt="Sunrise" width={"25%"} />
              </p>
              <p>
                {sunset} <img src={SUNSET} alt="sunset" width={"25%"} />
              </p>
            </Card.Text>
          </Card.Body>
        </TomCard>

        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}> Humedad </Card.Header>
          <Card.Body>
            <Card.Text>
              {humidity} <img src={HUMIDITY} alt="Humidity" width={"25%"} />
            </Card.Text>
          </Card.Body>
        </TomCard>

        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}>
            {" "}
            Visibilidad{" "}
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <img src={visibilityImg} alt="Vis" width={"25%"} />
            </Card.Text>
          </Card.Body>
        </TomCard>
        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}>
            Temperatura
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <p>
                Max {tempMax} <FaTemperatureArrowUp />
              </p>
              <p>
                Min {tempMin} <FaTemperatureArrowDown />
              </p>
            </Card.Text>
          </Card.Body>
        </TomCard>
      </Box>
    </div>
  );
}
