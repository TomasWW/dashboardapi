import "./App.css";
import { Highlights } from "./Components/Highlights";
import DashboardClima from "./Components/DashboardClima";
import Thermometer from "./Components/Thermometer";
import { TempMaxMin } from "./Components/TempMaxMin";
import DailyTemp from "./Components/DailyTemp";
import DashboardTrafico from "./Components/DashboardTrafico";

function App() {
  return (
    <div className="App">
      <DashboardClima className="dashbordclima">
        <Thermometer className="therm" />

        <DailyTemp className="chart" />

        <TempMaxMin className="maxmin"  tempMin="6°C" />

        <Highlights
          className="cards"
          uvIndex="UV 1 "
          sunrise="6am"
          sunset="20pm"
          humidity="30"
          visibility="Baja"
          airQuality="105 Malo"
          windStatus="Fuertes"
        />
      </DashboardClima>
      <DashboardTrafico>Datos de Tráfico</DashboardTrafico>
    </div>
  );
}

export default App;
