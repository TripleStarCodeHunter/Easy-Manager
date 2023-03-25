import React from 'react';
import { RadialBar, Legend } from 'recharts';

const GaugeChart = () => {
  const data = [
    { name: 'Value', value: '25' },
  ];

  return (
    <RadialBar
      width={200}
      height={200}
      data={data}
      startAngle={-180}
      endAngle={0}
      minAngle={-180}
      maxAngle={0}
      background
      clockWise
      cornerRadius={10}
      dataKey="value"
      fill="#8884d8"
    >
      <Legend iconSize={10} width={120} height={140} layout="vertical" verticalAlign="middle" align="right" />
    </RadialBar>
  );
};

export default GaugeChart;
