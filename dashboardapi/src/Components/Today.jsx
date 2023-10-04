import { useState } from "react";
import React from "react";
import styled from "styled-components";

const StyledToday = styled.div`
  background-color: greenyellow;
  width: 100%;
  border: 1px solid red;
  padding: 5px;
  font-size: calc(5px + 2vmin);
`;
export function Today({ title }) {
  return (
    <div>
      <StyledToday> {title} </StyledToday>
    </div>
  );
}
