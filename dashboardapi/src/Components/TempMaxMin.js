import React from "react";
import TEMPMAX from "../assets/sunrise.svg";

import TEMPMIN from "../assets/sunset.svg";
import styled from "styled-components";

const MaxMin = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
`;

export function TempMaxMin({ tempMax, tempMin }) {
  return (
    <>
      <MaxMin><p>

      Temperatura Max {tempMax}
      </p>
      Temperatura Min{tempMin}</MaxMin>
    </>
  );
}
