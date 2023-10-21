import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import React, { useEffect, useState } from "react";
import busIconPng from "../assets/bus_icon.png";
import datosTrafico from "./DatosTraficos";

const position = [-34.66087, -58.6663055];

var busIcon = new Icon({
  iconUrl: busIconPng,
  iconSize: [20, 38],
  iconAnchor: [10, 20],
  popupAnchor: [0, -20],
});

function DashboardTrafico({ selectedLine }) {
  const [userLine, setUserLine] = useState(null);
  console.log("Selected Line in DashboardTrafico:", selectedLine);
  console.log(typeof(selectedLine))
  // Use useEffect to update the userLine when the selectedLine prop changes
  useEffect(() => {
    console.log("All Data:", datosTrafico);
    const filteredData = datosTrafico.filter((bus) => bus.agency_id === selectedLine);
    setUserLine(filteredData);
    console.log("User Line Data:", filteredData);
  }, [selectedLine]);

  return (
    <div>

    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {userLine ? (
        userLine.map((item, index) => (
          <Marker
            key={index}
            position={[item.latitude, item.longitude]}
            icon={busIcon}
          >
            <Popup>
              Linea N°: {item.agency_id} Velocidad: {item.speed}
            </Popup>
          </Marker>
        ))
      ) : (
        <p>Cargando datos...</p>
      )}
    </MapContainer>
    </div>
  );
}

export default DashboardTrafico;
