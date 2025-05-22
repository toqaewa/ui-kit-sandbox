import React, { useState } from 'react';
import './Chart.css'
import {
  LineChart,
  Line,
  BarChart, 
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from './CustomTooltip';
import Toggle from '../Toggle/Toggle';

const badData = [
  {
    name: "Monday",
    income: Math.round(Math.random() * 10000),
    expense: Math.round(Math.random() * 10000),
    revenue: Math.round(Math.random() * 10000),
    profit: Math.round(Math.random() * 10000),
  },
  {
    name: "Tuesday",
    income: Math.round(Math.random() * 10000),
    expense: Math.round(Math.random() * 10000),
    revenue: Math.round(Math.random() * 10000),
    profit: Math.round(Math.random() * 10000),
  },
  {
    name: "Wendesday",
    // income: Math.round(Math.random() * 10000),
    expense: Math.round(Math.random() * 10000),
    revenue: Math.round(Math.random() * 10000),
    profit: Math.round(Math.random() * 10000),
  },
  {
    name: "Thursday",
    income: Math.round(Math.random() * 10000),
    expense: Math.round(Math.random() * 10000),
    revenue: Math.round(Math.random() * 10000),
    profit: Math.round(Math.random() * 10000),
  },
  {
    name: "Friday",
    // income: Math.round(Math.random() * 10000),
    expense: Math.round(Math.random() * 10000),
    revenue: Math.round(Math.random() * 10000),
    profit: Math.round(Math.random() * 10000),
  },
  {
    name: "Saturday",
    income: 0,
    expense: Math.round(Math.random() * 10000),
    revenue: Math.round(Math.random() * 10000),
    profit: Math.round(Math.random() * 10000),
  },
  {
    name: "Sunday",
    income: Math.round(Math.random() * 10000),
    expense: Math.round(Math.random() * 10000),
    revenue: Math.round(Math.random() * 10000),
    profit: Math.round(Math.random() * 10000),
  },
];

function BadDataChart() {
    const [isColumnChart, setIsColumnChart] = useState(false);
    return (
        <div style={{ width: '100%', height: 300, display: "flex", flexDirection:"column", alignItems: "center" }}>
            <div style={{display: "flex", gap: 16}}>
                <span className='title'>Bad Data Chart</span>
                <Toggle 
                label='Column Chart'
                initialValue={isColumnChart}
                onChange={setIsColumnChart}
                />
            </div>
            {
                isColumnChart ? (
                    <ResponsiveContainer height={420} width="100%">
                        <BarChart 
                            data={badData}
                            margin={{
                                top: 12,
                                right: 0,
                                left: 0,
                                bottom: 24,
                            }} 
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke='#777677' strokeOpacity={0.5} />
                            <XAxis className="App" dataKey="name" interval={"preserveStartEnd"} />
                            <YAxis className="App" />
                            <Tooltip 
                                content={<CustomTooltip />}
                                cursor={{
                                    strokeDasharray: "3 3",
                                    stroke: '#777677',
                                    strokeOpacity: 0.5,
                                }} 
                            />
                            <Legend />
                            <Bar dataKey="income" fill="#3370FF" />
                            <Bar dataKey="expense" fill="#04E762" />
                            <Bar dataKey="revenue" fill="#B15DE8" />
                            <Bar dataKey="profit" fill="#99FFF8" />
                        </BarChart>
                    </ResponsiveContainer>
                ) : (
                    <ResponsiveContainer height={420} width="100%">
                        <LineChart 
                            data={badData}
                            margin={{
                                top: 12,
                                right: 0,
                                left: 0,
                                bottom: 24,
                            }} 
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke='#777677' strokeOpacity={0.5} />
                            <XAxis className="App" dataKey="name" interval={"preserveStartEnd"} />
                            <YAxis className="App" />
                            <Tooltip 
                                content={<CustomTooltip />}
                                cursor={{
                                    strokeDasharray: "3 3",
                                    stroke: '#777677',
                                    strokeOpacity: 0.5,
                                }} 
                            />
                            <Legend />
                            <Line type="monotone" dataKey="income" stroke="#3370FF" dot={{ fill: '#3370FF' }} activeDot={{ stroke: '#3370FF', strokeWidth: 2 }} />
                            <Line type="monotone" dataKey="expense" stroke="#04E762" dot={{ fill: '#04E762' }} activeDot={{ stroke: '#04E762', strokeWidth: 2 }} />
                            <Line type="monotone" dataKey="revenue" stroke="#B15DE8" dot={{ fill: '#B15DE8' }} activeDot={{ stroke: '#B15DE8', strokeWidth: 2 }} />
                            <Line type="monotone" dataKey="profit" stroke="#99FFF8" dot={{ fill: '#99FFF8' }} activeDot={{ stroke: '#99FFF8', strokeWidth: 2 }} />
                        </LineChart>
                    </ResponsiveContainer>
                )
            }
        </div>
    );
}

export default BadDataChart;
