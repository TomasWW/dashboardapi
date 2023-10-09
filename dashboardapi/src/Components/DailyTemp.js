import React, { PureComponent } from "react";
import styled from "styled-components";
import climaApi from "./climaApi";
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

export default class DailyTemp extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [], // Inicializamos data como un array vacío
    };
  }

  componentDidMount() {
    // Extraemos los datos de temperaturas horarias de climaApi dentro de componentDidMount
    const hourlyTemperatures = climaApi.hourly.temperature_2m;

    // Creamos un nuevo array de objetos que contiene el horario y la temperatura
    const newData = climaApi.hourly.time.map((time, index) => ({
      name: this.formatTime(time),
      Temperatura: hourlyTemperatures[index],
    }));

    // Actualizamos el estado con los nuevos datos
    this.setState({ data: newData });
  }
  formatTime(time) {
    const date = new Date(time);
    return `${date.getHours()}hs`;
  }
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={this.state.data} // Usamos this.state.data en lugar de data
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
          <Bar
            dataKey="Temperatura"
            fill="#c2948a"
            barSize={10}
            radius={[15, 15, 0, 0]}
          />
          <text x="50%" y="5%" textAnchor="middle" dominantBaseline="middle">
            Temperatura Horaria
          </text>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
