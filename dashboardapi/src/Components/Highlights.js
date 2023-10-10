import { useState } from "react";
import React from "react";
import styled from "styled-components";
import { TbUvIndex } from "react-icons/tb";
import { WiWindBeaufort5 } from "react-icons/wi";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import { WiHumidity } from "react-icons/wi";
import { FcHighPriority } from "react-icons/fc";
import { BsFillCloudFogFill } from "react-icons/bs";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import datosApi from "../Components/climaApi"
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
  font-size: calc(1px + 1vh);
  padding: 0em;
`;

export function Highlights({
  uvIndex,
  windStatus,
  sunrise,
  sunset,
  humidity,
  visibility,
  airQuality,
})


{
  const apiUvIndex = datosApi["daily"]["uv_index_max"]
  const apiWind = datosApi["daily"]["windspeed_10m_max"]
  const apiSunset = datosApi["daily"]["sunset"]
  const apiSunrise = datosApi["daily"]["sunrise"]

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
            <Card.Text>{uvIndex = apiUvIndex }</Card.Text>
            <TbUvIndex />
          </Card.Body>
        </TomCard>
        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}> VIENTOS </Card.Header>
          <Card.Body>
            <Card.Text>{windStatus =apiWind }</Card.Text>
            <WiWindBeaufort5 />
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
                {sunrise = apiSunrise} <FiSunrise />
              </p>
              <p>
                {sunset = apiSunset} <FiSunset />
              </p>
            </Card.Text>
          </Card.Body>
        </TomCard>

        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}> Humedad </Card.Header>
          <Card.Body>
            <Card.Text>
              {humidity}
              <WiHumidity />
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
              {visibility}
              <BsFillCloudFogFill />
            </Card.Text>
          </Card.Body>
        </TomCard>
        <TomCard border="dark">
          <Card.Header style={{ background: "#BBB193" }}>
            {" "}
            Calidad del Aire{" "}
          </Card.Header>
          <Card.Body>
            <Card.Text>
              {airQuality}
              <FcHighPriority />
            </Card.Text>
          </Card.Body>
        </TomCard>
      </Box>
    </div>
  );
}
