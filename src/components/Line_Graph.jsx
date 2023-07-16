import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const state = {
  labels: ["18", "25", "35", "45", "55", "65", "75"],
  datasets: [
    {
      label: "User Age Group Analysis",
      backgroundColor: [
        "Indigo",
        "Purple",
        "Yellow",
        "Teal",
        "Red",
        "Navy",
        "Brown",
      ],
      fill: false,
      lineTension: 0.5,
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [45, 55, 34, 10, 19, 10, 4],
    },
  ],
};

export default class Line_Graph extends React.Component {
  render() {
    return (
      <div style={{ height: "1000px", width: "1000px", margin: "auto" }}>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: "User Age Group Analysis",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}
