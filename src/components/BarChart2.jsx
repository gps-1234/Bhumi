import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const state = {
  labels: [
    "Instagram",
    "Facebook",
    "LinkedIn",
    "Twitter",
    "Threads",
    "News",
    "Friends and Family",
  ],
  datasets: [
    {
      label: "Market Reach Analysis",
      backgroundColor: "rgba(219, 79, 142, 0.77)",
      borderColor: "rgba(219, 79, 79, 0.77)",
      borderWidth: 2,
      data: [28, 69, 19, 10, 70, 20, 80],
    },
  ],
};

export default class BarChart1 extends React.Component {
  render() {
    return (
      <div style={{ height: "1000px", width: "1000px", margin: "auto" }}>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: "Market Reach Analysis",
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
