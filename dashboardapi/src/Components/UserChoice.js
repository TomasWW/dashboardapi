import React from "react";
import datosTrafico from "./DatosTraficos";

export default function UserChoice({ onUserSelect }) {
  // Crear un conjunto (Set) para almacenar las líneas únicas
  const uniqueLines = new Set();

  // Obtener todas las líneas de colectivos únicas
  datosTrafico.forEach((item) => {
    uniqueLines.add(item.agency_id);
  });

  // Convertir el conjunto en un array ordenado alfabéticamente
  const uniqueLinesArray = Array.from(uniqueLines).sort();

  const handleUserLine = (event) => {
    const selectedLine = parseInt(event.target.value);
    // console.log("Selected Line:", selectedLine);
    onUserSelect(selectedLine);
  };
  return (
    <select onChange={handleUserLine}>
      <option>Elija una línea</option>
      {uniqueLinesArray.map((line, index) => (
        <option key={index} value={line}>
          Línea {line}
        </option>
      ))}
    </select>
  );
}
