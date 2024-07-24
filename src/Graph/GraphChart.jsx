
import React from 'react';
import "./Graphchart.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell, ResponsiveContainer, Layer, ReferenceLine } from 'recharts';
const assigned = 1000000;
const dataset = [
  {
    pending: 0,
    compleated: 2000000,
    month: 'Jan',
  },
  {
    pending: 450000,
    compleated: 550000,
    month: 'Fev',
  },
  {
    pending: 160000,
    compleated: 840000,
    month: 'Mar',
  }
];

const amountFormatter = (value) => {
  if (value >= 10000000) {
    const crores = (value / 10000000).toFixed(1);
    return `${crores}CR`;
  } else if (value >= 100000) {
    const lakhs = (value / 100000).toFixed(1);
    return `${lakhs}L`;
  } else if (value >= 1000) {
    const thousands = (value / 1000).toFixed(1);

    return `${thousands}K`;
  } else {
    return value.toString();
  }
};

const TickPlacementBars = () => {
  return (
    <div style={{ width: '100%', height: 170 }}>
      <ResponsiveContainer>
        <BarChart
          data={dataset}
          barSize={10}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="completedGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="green" />
              <stop offset="100%" stopColor="blue" />
            </linearGradient>
            <linearGradient id="pendingGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="20%" stopColor="#eeeeee" />
              <stop offset="20%" stopColor="#eeeeee" />
              <stop offset="10%" stopColor="#eeeeee" />
              <stop offset="75%" stopColor="#eeeeee" />
              <stop offset="100%" stopColor="rgb(236 236 236 / 6%)" />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis tickFormatter={amountFormatter} fontSize={'10px'} fontWeight={"400"} color='rgba(115, 123, 139, 1)' />
          <Tooltip
            contentStyle={{
              width: 'auto', // Adjust width as needed
              height: 'auto', // Set to 'auto' for dynamic height or specify a height
              color: 'black', // Text color
              fontSize: '10px', // Text size
              backgroundColor: '#ffffff78', // Background color
              border: '0px solid rgba(115, 123, 139, 1)',
              borderRadius: '10px', // Border style,
              boxShadow: ' rgba(34, 43, 69, 0.2) 0px 2px 4px 0px'
            }}
          />          {/* <Legend /> */}
          <Bar dataKey="compleated" stackId="a" shape={<CustomBar offsetY={-2} />} >
            {dataset.map((entry, index) => (
              <Cell key={`cell-compleated-${index}`} fill={entry.compleated >= assigned ? 'green' : 'red'} radius={10} />
            ))}
          </Bar>
          <Bar dataKey="pending" stackId="a" shape={<CustomBar offsetY={0} />} >

            {dataset.map((entry, index) => (
              <Cell key={`cell-pending-${index}`} fill={`url(#pendingGradient)`} />
            ))}
          </Bar>


          <ReferenceLine
            key={`reference-pending-${''}`}
            y={assigned}
            stroke="#eeeeee"
            strokeWidth={1}
          />


        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TickPlacementBars;

const CustomBar = (props) => {
  const { fill, x, y, width, height, radius, offsetY } = props;

  return (

    <Layer>
      <rect
        x={x}
        y={y + offsetY}
        width={width}
        height={height}
        fill={fill}
        ry={5}
      />
      <path
        d={`M${x},${y + offsetY + height / 2} h${width} v${height / 2} h${-width} Z`}
        fill={fill}
      />
    </Layer>
  );
};







