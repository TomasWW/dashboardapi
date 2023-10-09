import React, { Component } from "react";
import styled from "styled-components";
import climaApi from "./climaApi";
const MainFrame = styled.div`
  width: 300px;
  height: 200px;
  text-align: center;
  position: relative;

  > div:first-child {
    border: 1px solid #ababab;
    position: relative;
    height: 150px;
    overflow: hidden;
  }
`;

const CircleOne = styled.div`
  position: absolute;
  background-color: #28536b;
  top: 72%;
  left: calc(50% - 8px);
  width: 20px;
  height: 20px;
  border-radius: 50% 50%;
`;

const CircleTwo = styled.div`
  position: absolute;
  background-color: #7ea8be;
  top: 24px;
  left: calc(150px - 95px);
  width: 190px;
  height: 190px;
  border-radius: 50% 50% 0 0;
  z-index: -2;
  &::after {
    position: absolute;
    content: "";
    height: 50%;
    background-color: #f6f0ed;
    top: 92px;
    left: 0;
    width: 101%;
  }
  &::before {
    position: absolute;
    content: "";
    top: 5px;
    left: 5px;
    background-color: #f6f0ed;
    height: calc(100% - 10px);
    width: calc(100% - 10px);
    border-radius: 50% 50% 0 0;
  }
`;

const Line = styled.div`
  display: inline-block;
  position: absolute;
  z-index: -1;
  width: 4px;
  background-color: #c2948a;
  transform: rotate(${(props) => props.rotation || "-230deg"});

  height: 200px;
  top: 12%;
  &&::after {
    position: absolute;
    content: "";
    top: 0%;
    left: -1px;
    bottom: 50%;
    right: -1px;
    background-color: #f6f0ed;
  }
`;

const Number = styled.div`
  width: 20px;
  left: 140px;
  height: 240px;
  display: inline-block;
  position: absolute;
  z-index: -1;
  ${({ rotation }) => {
    if (rotation) {
      return `transform: rotate(${rotation}deg)`;
    }
  }};
  ${({ bottom }) => {
    if (bottom) {
      return `bottom: ${bottom}`;
    }
  }};
`;

const currentTemp = climaApi.current_weather.temperature;
const currentDay = climaApi.current_weather.time;
const currentUnits = climaApi.hourly_units;
export default class Thermometer extends Component {
  render() {
    return (
      <MainFrame>
        <div>
          <Line rotation={`${((currentTemp - -10) / (30 - -10)) * 260}deg`} />   {/* Falta calibrar la linea de acuerdo a la temperatura */}
          <Number rotation="-90">-5</Number>
          <Number rotation="-70">0</Number>
          <Number rotation="-50">10</Number>
          <Number rotation="-30">15</Number>
          <Number rotation="-10">20</Number>
          <Number rotation="10">25</Number>
          <Number rotation="30">30</Number>
          <Number rotation="50">35</Number>
          <Number rotation="80">40</Number>
          <CircleTwo />
          <CircleOne />
        </div>
        <>{currentDay}</>
        <p>
          {currentTemp} {currentUnits.temperature_2m}
        </p>
      </MainFrame>
    );
  }
}
