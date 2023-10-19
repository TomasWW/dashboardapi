import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function DailyTemp({ apiHourlyTime, apiHourlyTemp }) {
  // Define el estado para almacenar los datos
  const [data, setData] = useState([]);

  // Utiliza useEffect para cargar los datos cuando apiHourlyTime o apiHourlyTemp cambien
  useEffect(() => {
    if (
      apiHourlyTemp &&
      apiHourlyTemp.length > 0 &&
      apiHourlyTime &&
      apiHourlyTime.length > 0
    ) {
      // Extrae las temperaturas y crea nuevos datos
      const hourlyTemperatures = apiHourlyTemp;
      const newData = apiHourlyTime.map((time, index) => ({
        name: formatTime(time),
        Temperatura: hourlyTemperatures[index],
      }));

      // Actualiza el estado con los nuevos datos
      setData(newData);
    }
  }, [apiHourlyTime, apiHourlyTemp]);

  // Función para formatear la hora a "HHhs"
  const formatTime = (time) => {
    const date = new Date(time);
    return `${date.getHours()}hs`;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 10,
          bottom: 0,
        }}
        barCategoryGap="10%"
        barGap="5%"
      >
        <CartesianGrid strokeDasharray="3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Temperatura" fill="#c2948a" barSize={10} radius={[15, 15, 0, 0]} />
        <text x="50%" y="5%" textAnchor="middle" dominantBaseline="middle">
          Temperatura Horaria
        </text>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default DailyTemp;


