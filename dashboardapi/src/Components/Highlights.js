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
const Card = styled.div`
  background-color: #c2948a;
  border: 1px solid #7ea8be;
  font-size: calc(5px + 1vmin);
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
  
`;
const Title = styled.div`
  font-size: large;
`;
const H3 = styled.h3`
  margin: auto;
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
    <>
      <H3>Highlights</H3>
      <Box>
        <Card>
          <Title>Indice UV </Title>
          <p> {uvIndex}</p>
          <h2>
            <TbUvIndex />
          </h2>
        </Card>
        <Card>
          <Title>Vientos</Title>
          <p>{windStatus}</p>
          <h2>
            <WiWindBeaufort5 />
          </h2>
        </Card>
        <Card>
          <Title> Amanecer / Anocher</Title>
          <p>
            {sunrise} <FiSunrise />
          </p>
          <p>
            {sunset} <FiSunset />
          </p>
        </Card>
        <Card>
          <Title>Humedad</Title>
          <h3>
            {humidity}
            <WiHumidity />
          </h3>
        </Card>
        <Card>
          <Title>Visibilidad </Title>
          <p> {visibility}</p>
          <BsFillCloudFogFill />
        </Card>
        <Card>
          <Title>Calidad Aire </Title>
          <p> {airQuality}</p>
          <FcHighPriority />
        </Card>
      </Box>
    </>
  );
}
