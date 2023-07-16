import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const state = {
  labels: [
    "Bangalore",
    "Chennai",
    "Jaipur",
    "Hyderabad",
    "Kolkatta",
    "New Delhi",
    "Mangalore",
  ],
  datasets: [
    {
      label: "User Region Analysis",
      backgroundColor: "rgba(219, 79, 142, 0.77)",
      borderColor: "rgba(219, 79, 79, 0.77)",
      borderWidth: 2,
      data: [38, 47, 19, 20, 40, 50, 39],
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
              text: "User Region Analysis",
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
