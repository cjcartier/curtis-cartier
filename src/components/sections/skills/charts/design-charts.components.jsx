import * as React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const DevCharts = () => {
  const data = {
    labels: [
      "Illustrator",
      "Photoshop",

      "Figma & Xd",
      "Creative Direction",
      "Photography",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [7, 6, 8, 9, 9],
        backgroundColor: [
          "#ED8936",
          "#0BC5EA",
          "#ECC94B",
          "#4299E1",
          "#9F7AEA",
        ],
      },
    ],
  };

  return (
    <PolarArea
      options={{
        color: "#000000",
        borderColor: "rgba(0,0,0,.5)",
        scales: {
          max: "10",
        },
      }}
      data={data}
    />
  );
};

export default DevCharts;
