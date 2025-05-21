import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from './CustomTooltip';

const generateWeekData = (weeksCount: any, year = 2025) => {
  return Array.from({ length: weeksCount }, (_, i) => ({
    name: `${i + 1} Week ${year}`,
    income: Math.round(Math.random() * 10000),
    expense: Math.round(Math.random() * 10000),
    revenue: Math.round(Math.random() * 10000),
    profit: Math.round(Math.random() * 10000),
  }));
};

const data = generateWeekData(23);

function RandomDataChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
        <span className='title'>Random Data Chart</span>
        <ResponsiveContainer>
            <LineChart 
                data={data}
                margin={{
                    top: 12,
                    right: 0,
                    left: 0,
                    bottom: 24,
                  }} 
            >
                <CartesianGrid strokeDasharray="3 3" stroke='#777677' strokeOpacity={0.5} />
                <XAxis className="App" dataKey="name" interval={"preserveStartEnd"} />
                {/* <YAxis className="App" /> */}
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip 
                    content={<CustomTooltip />}
                    cursor={{
                        strokeDasharray: "3 3",
                        stroke: '#777677',
                        strokeOpacity: 0.5,
                    }} 
                />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="income" stroke="#3370FF" dot={{ fill: '#3370FF' }} activeDot={{ stroke: '#3370FF', strokeWidth: 2 }} />
                <Line yAxisId="left" type="monotone" dataKey="expense" stroke="#04E762" dot={{ fill: '#04E762' }} activeDot={{ stroke: '#04E762', strokeWidth: 2 }} />
                <Line yAxisId="right" type="monotone" dataKey="revenue" stroke="#B15DE8" dot={{ fill: '#B15DE8' }} activeDot={{ stroke: '#B15DE8', strokeWidth: 2 }} />
                <Line yAxisId="right" type="monotone" dataKey="profit" stroke="#99FFF8" dot={{ fill: '#99FFF8' }} activeDot={{ stroke: '#99FFF8', strokeWidth: 2 }} />
            </LineChart>
        </ResponsiveContainer>
    </div>
  );
}

export default RandomDataChart;