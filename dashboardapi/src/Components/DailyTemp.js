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
  const [data, setData] = useState([]);

  useEffect(() => {
    if (
      apiHourlyTemp &&
      apiHourlyTemp.length > 0 &&
      apiHourlyTime &&
      apiHourlyTime.length > 0
    ) {
      const hourlyTemperatures = apiHourlyTemp;

      const newData = apiHourlyTime.map((time, index) => ({
        name: formatTime(time),
        Temperatura: hourlyTemperatures[index],
      }));

      setData(newData);
    }
  }, [apiHourlyTime, apiHourlyTemp]);

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
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barCategoryGap="10%"
        barGap="5%"
      >
        <CartesianGrid strokeDasharray=" 3" />
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


