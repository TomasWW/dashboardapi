import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import React, { useEffect, useState } from "react";
import busIconPng from "../assets/bus_icon.png";
import busIconPngR from "../assets/bus_icon_R.png"

const busIcon = new Icon({
  iconUrl: busIconPng,
  iconSize: [20, 38],
  iconAnchor: [10, 20],
  popupAnchor: [0, -20],
});
const busIconRet = new Icon({
  iconUrl: busIconPngR,
  iconSize: [20, 38],
  iconAnchor: [10, 20],
  popupAnchor: [0, -20],
});
function DashboardTrafico({ selectedLine, setSelectedLine }) {
  const [userLine, setUserLine] = useState([]);
  const [center, setCenter] = useState([-34.60376, -58.38162]);

  const fetchTrafficData = async (routeId) => {
    try {
      const response = await fetch(
        `https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?route_id=${routeId}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`
      );

      if (!response.ok) {
        throw new Error("Error al obtener datos de la API de tráfico");
      }

      const data = await response.json();
      setUserLine(data);

      // Actualiza el centro del mapa con la primera posición en la lista de autobuses
      if (data.length > 0) {
        setCenter([data[0].latitude, data[0].longitude]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTrafficData(selectedLine);
  }, [selectedLine]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchTrafficData(selectedLine);
    }, 31000);
    return () => clearInterval(interval);
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
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            backgroundColor: "transparent",
            padding: "20px",
            margin: "20px",
            zIndex: 1000,
            borderRadius: "5px",
          }}
        >
          <select
            value={selectedLine}
            onChange={(event) => setSelectedLine(event.target.value)}
          >
            <option value="">Seleccione su Linea</option>
            <option value="1468">153A a B° Nuevo</option>
            <option value="100">152A "A" - a La Boca</option>
            <option value="2">7A Barrio Policial</option>
            <option value="1">7A Toma Nueva</option>
            <option value="556">158A a Nueva Pompeya</option>
            <option value="1696">159E 2 hacia C Central</option>
            <option value="60">281L Ramal L - VUELTA</option>
          </select>
        </div>
        {userLine ? (
          userLine.map((item, index) => (
            <Marker
              key={index}
              position={[item.latitude, item.longitude]}
              icon={item.direction === 0 ? busIcon : busIconRet}
            >
              <Popup>
                Línea N°: {item.route_short_name} -- {item.trip_headsign} <br />
                {item.direction === 0 ? "Ida" : "Vuelta"}  <br />
                Velocidad: {Math.round(item.speed)}  Km/h
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
