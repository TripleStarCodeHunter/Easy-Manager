import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', Customers: 4000, Revenue: 2400, amt: 2400 },
  { name: 'Feb', Customers: 3000, Revenue: 1398, amt: 2210 },
  { name: 'Mar', Customers: 2000, Revenue: 9800, amt: 2290 },
  { name: 'Apr', Customers: 2780, Revenue: 3908, amt: 2000 },
  { name: 'May', Customers: 1890, Revenue: 4800, amt: 2181 },
  { name: 'Jun', Customers: 2390, Revenue: 3800, amt: 2500 },
  { name: 'Jul', Customers: 3490, Revenue: 4300, amt: 2100 },
  
];

const LineGraph = () => {
  return (
    <LineChart width={700} height={425} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
R     <Line type="monotone" dataKey="Revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Customers" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineGraph;
