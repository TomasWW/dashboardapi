import React from "react";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";
import datosApi from "./climaApi";
import styled from "styled-components";

const MaxMin = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: calc(5px + 1vmin);
  border: 1px solid #7ea8be;
  background-color: #c2948a;
  width: 50%;
  max-height: 100%;
  align-items: center;
`;

export function TempMaxMin({ tempMax, tempMin }) {
  const apiTempMax = datosApi["daily"]["temperature_2m_max"];
  const apiTempMin = datosApi["daily"]["temperature_2m_min"]
  
  

  return (
    <>
      <MaxMin>
        Temperatura
        <p>
          Max {tempMax = apiTempMax} <FaTemperatureArrowUp />
        </p>
        <p>
          Min {tempMin = apiTempMin} <FaTemperatureArrowDown />
        </p>
      </MaxMin>
    </>
  );
}
