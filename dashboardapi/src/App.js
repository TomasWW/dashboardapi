import "./App.css";
import { Highlights } from "./Components/Highlights";
import DashboardClima from "./Components/DashboardClima";
import { Today } from "./Components/Today";
import { TempMaxMin } from "./Components/TempMaxMin";
import Example, { DailyTemp } from "./Components/DailyTemp";
import DashboardTrafico from "./Components/DashboardTrafico";

function App() {
  return (
    <div className="App">
      <DashboardClima>
        <Today title="Monday" />
        <Example />
        <TempMaxMin tempMax="18°C" tempMin="6°C" />
        <Highlights
          uvIndex="UV 1 "
          sunrise="6am"
          sunset="20pm"
          humidity="30"
          visibility="Buena"
          airQuality="105 Malo"
          windStatus="Fuertes"
        />
      </DashboardClima>
      <DashboardTrafico>Datos de Trafico</DashboardTrafico>
     
    </div>
  );
}

export default App;
