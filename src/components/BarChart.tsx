"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function BarChart() {
  return (
    <div className="w-full md:w-1/2 p-4 md:p-7 rounded-2xl bg-[#F9F9F9]">
      <Bar
        height={200}
        data={{
          labels: ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"],
          datasets: [
            {
              label: "Süt (litre)",
              data: [12000, 15000, 17000, 14000, 20000, 25000, 22000],
              backgroundColor: [
                "#9F9FF6",
                "#96E2D6",
                "#000000",
                "#93BEFF",
                "#AFC7EC",
                "#93E9B8",
              ],
              borderRadius: 10,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Haftalık Süt Üretimi",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                display: false,
                drawTicks: false,
              },
              border: {
                display: false,
              },
              ticks: {
                callback: function (value: number | string) {
                  return Number(value) >= 1000
                    ? Number(value) / 1000 + "k"
                    : value;
                },
              },
            },
            x: {
              grid: {
                display: false,
                drawTicks: false,
              },
              border: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart;
