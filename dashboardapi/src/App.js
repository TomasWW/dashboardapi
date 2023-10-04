import logo from "./logo.svg";
import "./App.css";
import { Highlights } from "./Components/Highlights";
import DashboardClima from "./Components/DashboardClima";
import { Today } from "./Components/Today";
import { TempMaxMin } from "./Components/TempMaxMin";
import { DailyTemp } from "./Components/DailyTemp";

function App() {
  return (
    <div className="App">
      <DashboardClima>
        <Today title="Monday" />
        <DailyTemp />
        <TempMaxMin />
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
    </div>
  );
}

export default App;
