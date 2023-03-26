import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', Customers: 10, Revenue: 50, amt: 2400 },
  { name: 'Feb', Customers: 17, Revenue: 85, amt: 2210 },
  { name: 'Mar', Customers: 29, Revenue: 145, amt: 2290 },
  { name: 'Apr', Customers: 30, Revenue: 150, amt: 2000 },
  { name: 'May', Customers: 35, Revenue: 175, amt: 2181 },
  { name: 'Jun', Customers: 43, Revenue: 215, amt: 2500 },
  { name: 'Jul', Customers: 57, Revenue: 285, amt: 2100 },
  
];

const LineGraph = () => {
  return (
    <LineChart width={700} height={425} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
     <Line type="monotone" dataKey="Revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Customers" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineGraph;
