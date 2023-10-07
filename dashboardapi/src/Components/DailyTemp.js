import React, { PureComponent } from "react";
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

const data = [
  {
    name: "00hs",
    Temperatura: 5,
  },
  {
    name: "2hs",
    Temperatura: 6,
  },
  {
    name: "4hs",
    Temperatura: 6,
  },
  {
    name: "6hs",
    Temperatura: 7,
  },
  {
    name: "8hs",
    Temperatura: 8,
  },
  {
    name: "10hs",
    Temperatura: 14,
  },
  {
    name: "12hs",
    Temperatura: 16,
  },
  {
    name: "14hs",
    Temperatura: 20,
  },
  {
    name: "16hs",
    Temperatura: 22,
  },
  {
    name: "18hs",
    Temperatura: 14,
  },
  {
    name: "20hs",
    Temperatura: 10,
  },
  {
    name: "22hs",
    Temperatura: 6,
  },
  {
    name: "24hs",
    Temperatura: 6,
  },
];

export default class Example extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={5}
          height={3}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barCategoryGap="10%" // Ajusta el espaciado entre las barras
          barGap="5%" // Ajusta el espacio entre grupos de barras
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Temperatura"
            fill="#82ca9d"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />{" "}
          <text x="50%" y="5%" textAnchor="middle" dominantBaseline="middle">
            Temperatura Horaria
          </text>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
