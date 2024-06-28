import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';

const GaussianBellCurve = ({ mean, stdDev, totalScore }) => {
  const [chartData, setChartData] = useState([]);
  const [maxY, setMaxY] = useState(1); // State to hold the maximum y value

  useEffect(() => {
    const data = [];
    const startX = 0;
    const endX = 100;

    // Find the maximum y value to normalize the curve height
    let max = 0;
    for (let i = startX; i <= endX; i += 1) {
      const y = calculateNormalDistribution(i, mean, stdDev);
      if (y > max) {
        max = y;
      }
      data.push({ x: i, y });
    }

    // Set the maximum y value
    setMaxY(max);

    // Normalize the curve height to fit within the chart
    const normalizedData = data.map(point => ({
      x: point.x,
      y: point.y / max
    }));

    setChartData(normalizedData);

  }, [mean, stdDev]);

  function calculateNormalDistribution(x, mean, stdDev) {
    return (
      (1 / (stdDev * Math.sqrt(2 * Math.PI))) *
      Math.exp((-1 * Math.pow(x - mean, 2)) / (2 * Math.pow(stdDev, 2)))
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} />
        <YAxis type="number" domain={[0, 1]} ticks={[0, 0.2, 0.4, 0.6, 0.8, 1]} tickFormatter={(value) => `${(value * 100).toFixed(0)}%`} />
        <Tooltip formatter={(value) => `${(value * maxY).toFixed(2)}`} />
        <Line type="monotone" dataKey="y" stroke="#8884d8" dot={false} />
        <ReferenceLine x={50} stroke="red" label={`Score: ${totalScore}`} alwaysShow />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GaussianBellCurve;
