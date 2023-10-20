import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import React, { useEffect, useState } from "react";
import busIconPng from "../assets/bus_icon.png";
import datosTrafico from "./DatosTraficos";
const position = [-34.66087, -58.6663055];

// async function fetchTrafficData() {
//   try {
//     const response = await fetch(
//       "https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6"
//     );

//     if (!response.ok) {
//       throw new Error("Error al obtener datos de la API del clima");
//     }

//     const data = await response.json();

//     return data;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

// function DashboardTrafico() {
//   const [trafficData, setTrafficData] = useState(null);

//   useEffect(() => {
//     const fetchDataAndTraffic = async () => {
//       const data = await fetchTrafficData();

//       if (data) {
//         setTrafficData(data);
//       }
//     };
//     fetchDataAndTraffic();
//   }, []);
var busIcon = new Icon({
  iconUrl: busIconPng,
  iconSize: [20, 38],
  iconAnchor: [22, 94],
  popupAnchor: [-15, -76],
});

const busN63 = datosTrafico.filter((bus) => bus.agency_id === 60);
function DashboardTrafico() {
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {busN63.map((item, index) => {
        return (
          <Marker
            key={index}
            position={[item["latitude"], item["longitude"]]}
            icon={busIcon}
          >
            <Popup>
              Linea N°: {item["agency_id"]} Velocidad: {item["speed"]}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default DashboardTrafico;
