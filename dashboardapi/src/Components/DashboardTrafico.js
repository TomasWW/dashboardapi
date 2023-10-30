import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import React, { useEffect, useState } from "react";
import busIconPng from "../assets/bus_icon.png";
import datosTrafico from "./DatosTraficos";

var busIcon = new Icon({
  iconUrl: busIconPng,
  iconSize: [20, 38],
  iconAnchor: [10, 20],
  popupAnchor: [0, -20],
});

function DashboardTrafico({ selectedLine }) {
  const [userLine, setUserLine] = useState(null);
  const [center, setCenter] = useState([-34.60376, -58.38162]); // Centro inicial en el obelisco

  // Función para obtener datos de tráfico
  async function fetchTrafficData() {
    try {
      const response = await fetch(
        `https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=60&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`
      );

      if (!response.ok) {
        throw new Error("Error al obtener datos de la API de tráfico");
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  // Use useEffect para cargar los datos iniciales
  useEffect(() => {
    // console.log("All Data:", datosTrafico);
    const filteredData = datosTrafico.filter(
      (bus) => bus.agency_id === selectedLine
    );
    setUserLine(filteredData);
    if (filteredData && filteredData.length > 0) {
      setCenter([filteredData[0].latitude, filteredData[0].longitude]);
    }
    // console.log("User Line Data:", filteredData);
  }, [selectedLine]);

  return (
    <div>
      <MapContainer
        key={center.toString()}
        center={center}
        zoom={13}
        scrollWheelZoom={true}
      >
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
                Linea N°: {item.agency_id} {item.trip_headsign} <br />
                Velocidad: {item.speed}
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
