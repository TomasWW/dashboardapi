import React from "react";
import Thermometer from "react-thermometer-component";

function ThermometerComponent({ currentTemp }) {
  return (
    <Thermometer
      theme="white"
      value={currentTemp} // Valor de temperatura actual a mostrar en el termómetro.
      max="45" // Valor máximo que puede mostrar el termómetro (puedes ajustarlo según tus necesidades).
      steps="3" // Número de divisiones o pasos en el termómetro.
      format="°C"
      size="small"
    />
  );
}

export default ThermometerComponent;
