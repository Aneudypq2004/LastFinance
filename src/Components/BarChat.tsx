import { Bar } from "react-chartjs-2"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, Legend, Tooltip, CategoryScale, LinearScale, Title);

export default function BarChart() {

  const labels = ['January', 'February', 'March'];

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Bar Chart - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const data = {

    labels,

    datasets: [
      {
        label: 'Dataset 1',
        data: [1000],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Dataset 2',
        data: [500],
        backgroundColor: 'rgb(75, 192, 192)',
      },
      {
        label: 'Dataset 3',
        data: [300],
        backgroundColor: 'rgb(53, 162, 235)',
      },
    ]
  }

  return (
    <Bar  data={data} options={options} />
  )
}
