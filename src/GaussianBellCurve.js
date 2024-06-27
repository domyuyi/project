import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const GaussianBellCurve = ({ mean, stdDev }) => {
  // Generar datos para la campana de Gauss
  const generateGaussianData = (mean, stdDev) => {
    const data = [];
    for (let x = mean - 3 * stdDev; x <= mean + 3 * stdDev; x += 0.1) {
      const exponent = -0.5 * Math.pow((x - mean) / stdDev, 2);
      const y = (1 / (stdDev * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);
      data.push({ x, y });
    }
    return data;
  };

  const gaussianData = generateGaussianData(mean, stdDev);
  const data = {
    labels: gaussianData.map((point) => point.x.toFixed(2)),
    datasets: [
      {
        label: 'Curva de Gauss',
        data: gaussianData.map((point) => ({ x: point.x, y: point.y })),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 0, // Hides individual points
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Valor',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Probabilidad',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default GaussianBellCurve;
