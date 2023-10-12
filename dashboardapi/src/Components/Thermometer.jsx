import React from "react";
import Thermometer from "react-thermometer-component";
function ThermometerComponent({currentTemp}) {
  return (
    <Thermometer
      theme="white"
      value={currentTemp}
      max="45"
      steps="4"
      format="°C"
      size="small"
      height=""
      
    />
  );
}

export default ThermometerComponent;
