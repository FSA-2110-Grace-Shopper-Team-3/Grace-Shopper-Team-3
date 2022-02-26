import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './admin.css';

const data = [
  { title: 'Guitars', value: 10, color: '#483D8B' },
  { title: 'Drums', value: 3, color: '#1E90FF' },
  { title: 'Cellos', value: 2, color: '#48D1CC' },
  { title: 'Pianos', value: 5, color: '#008080' },
  { title: 'Acc.', value: 7, color: '#4682B4' },
];

const AdminAnalytics = () => {
  return (
    <div>
      <PieChart
        data={data}
        animate={true}
        animationDuration={800}
        lineWidth={100}
        label={({ x, y, dx, dy, dataEntry }) => (
          <text
            key={Math.random()}
            className="text"
            x={x}
            y={y}
            dx={dx}
            dy={dy}
            dominantBaseline="central"
            textAnchor="middle"
            style={{
              fontSize: 5,
              fontFamily: 'arial',
              fontWeight: 600,
              color: 'white',
              fill: 'white',
            }}
          >
            {dataEntry.title}
          </text>
        )}
      />
    </div>
  );
};

export default AdminAnalytics;
