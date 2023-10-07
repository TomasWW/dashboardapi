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
    Temperatura: 6,
  },
  {
    name: "4hs",
    Temperatura: 8,
  },
  {
    name: "8hs",
    Temperatura: 10,
  },
  {
    name: "12hs",
    Temperatura: 18,
  },
  {
    name: "16hs",
    Temperatura: 16,
  },
  {
    name: "20hs",
    Temperatura: 14,
  },
  {
    name: "24hs",
    Temperatura: 10,
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
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="Temperatura" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
