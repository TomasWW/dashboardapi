import React from "react";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTemperatureArrowDown } from "react-icons/fa6";

import styled from "styled-components";

const MaxMin = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: calc(15px + 1vmin);
  border: 1px solid black;
  background-color: whitesmoke;
  width: 50%;
  
  align-items: center;
`;

export function TempMaxMin({ tempMax, tempMin }) {
  return (
    <>
      <MaxMin>
      Temperatura
        <p>
          Max {tempMax} <FaTemperatureArrowUp />
        </p>
        <p>
          Min {tempMin} <FaTemperatureArrowDown />
        </p>
      </MaxMin>
    </>
  );
}
