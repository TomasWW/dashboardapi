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
    temp: 6,
  },
  {
    name: "4hs",
    temp: 8,
  },
  {
    name: "8hs",
    temp: 10,
  },
  {
    name: "12hs",
    temp: 18,
  },
  {
    name: "16hs",
    temp: 16,
  },
  {
    name: "20hs",
    temp: 14,
  },
  {
    name: "24hs",
    temp: 10,
  },
];

export default class Example extends PureComponent {
  render() {
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
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="temp" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
