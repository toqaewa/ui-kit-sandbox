import React, { useState } from 'react';
import {
    AreaChart,
    Area,
    BarChart, 
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import './Chart.css'
import CustomTooltip from './CustomTooltip';
import Toggle from '../Toggle/Toggle';

const generateBadAccumulatedData = (weeksCount: number, year = 2025) => {
  let accumulatedIncome = 0;
  let accumulatedExpense = 0;

  return Array.from({ length: weeksCount }, (_, i) => {
    const weeklyIncome = Math.round(Math.random() * 10000);
    const weeklyExpense = Math.round(Math.random() * 5000); // расходы делаю поменьше

    accumulatedIncome += weeklyIncome;
    accumulatedExpense += weeklyExpense;

    const revenue = accumulatedIncome - accumulatedExpense;
    const profit = revenue - accumulatedExpense * 0.2; // понижающий коэффициент, типа НДС 20%

    return {
      name: `${i + 1} Week ${year}`,
      income: weeklyIncome > 2000 ? accumulatedIncome : undefined,
      expense: weeklyExpense > 2000 ? accumulatedExpense : undefined,
      revenue: revenue > 2000 ? revenue : undefined,
      profit: profit > 2000 ? Math.round(profit) : undefined,
    };
  });
};

const badData = generateBadAccumulatedData(23);

function BadDataAccumulatedChart() {
  const [nullsConnected, setNullsConnected] = useState(false);
  const [isColumnChart, setIsColumnChart] = useState(false);
  return (
    <div style={{ width: '100%', height: 300, display: "flex", flexDirection:"column", alignItems: "center" }}>
      <div style={{display: "flex", gap: 16}}>
        <span className='title'>Bad Data Accumulated Chart</span>
        <Toggle 
          label='Column Chart'
          initialValue={isColumnChart}
          onChange={setIsColumnChart}
        />
        <Toggle 
          label='Убрать пробелы в данных'
          initialValue={nullsConnected}
          onChange={setNullsConnected}
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
          nullsConnected ? (
            <ResponsiveContainer height={420} width="100%">
            <AreaChart 
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
                    <Area connectNulls type="monotone" dataKey="income" stroke="#3370FF" fill="#3370FF" dot={{ fill: '#3370FF' }} activeDot={{ stroke: '#3370FF', strokeWidth: 2 }} />
                    <Area connectNulls type="monotone" dataKey="expense" stroke="#04E762" fill="#04E762" dot={{ fill: '#04E762' }} activeDot={{ stroke: '#04E762', strokeWidth: 2 }} />
                    <Area connectNulls type="monotone" dataKey="revenue" stroke="#B15DE8" fill="#B15DE8" dot={{ fill: '#B15DE8' }} activeDot={{ stroke: '#B15DE8', strokeWidth: 2 }} />
                    <Area connectNulls type="monotone" dataKey="profit" stroke="#99FFF8" fill="#99FFF8" dot={{ fill: '#99FFF8' }} activeDot={{ stroke: '#99FFF8', strokeWidth: 2 }} />
                </AreaChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer height={420} width="100%">
            <AreaChart 
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
                    <Area type="monotone" dataKey="income" stroke="#3370FF" fill="#3370FF" dot={{ fill: '#3370FF' }} activeDot={{ stroke: '#3370FF', strokeWidth: 2 }} />
                    <Area type="monotone" dataKey="expense" stroke="#04E762" fill="#04E762" dot={{ fill: '#04E762' }} activeDot={{ stroke: '#04E762', strokeWidth: 2 }} />
                    <Area type="monotone" dataKey="revenue" stroke="#B15DE8" fill="#B15DE8" dot={{ fill: '#B15DE8' }} activeDot={{ stroke: '#B15DE8', strokeWidth: 2 }} />
                    <Area type="monotone" dataKey="profit" stroke="#99FFF8" fill="#99FFF8" dot={{ fill: '#99FFF8' }} activeDot={{ stroke: '#99FFF8', strokeWidth: 2 }} />
                </AreaChart>
            </ResponsiveContainer>
          )
        )
      }
      
    </div>
  );
}

export default BadDataAccumulatedChart;
