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
      "React & Frameworks",
      "State Management",
      "CSS, SCSS, LESS",
      "Data Management",
      "GraphQL & REST",
      "Hosting/Backend Services",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [8, 7, 10, 8, 9, 7],
        backgroundColor: [
          "#ED8936",
          "#0BC5EA",
          "#ECC94B",
          "#48BB78",
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
      }}
      data={data}
    />
  );
};

export default DevCharts;
