"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function SampleChart() {
  const data = {
    labels: ["Pzt", "Salı", "Çrş", "Prş", "Cuma", "Cmt", "Paz"],
    datasets: [
      {
        label: "Günlük Süt (Litre)",
        data: [4.1, 5.3, 4.8, 6.2, 5.9, 7.0, 6.5],
        borderColor: "#E4E4E7",
        backgroundColor: "#E4E4E7",
        tension: 0.3,
      },
      {
        label: "Aylık Süt (Litre)",
        data: [4.1, 2.3, 30.8, 14.2, 10.9, 9.0, 4.5],
        borderColor: "#9E9E9E",
        backgroundColor: "#9E9E9E",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Haftalık Süt Üretimi",
      },
    },
  };

  return <Line data={data} options={options} height={200} />;
}
