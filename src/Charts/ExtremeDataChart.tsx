import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart, 
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  TooltipProps,
  Legend,
  ResponsiveContainer,
} from "recharts";
import './Chart.css'
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import Toggle from '../Toggle/Toggle';

const ExtremeCustomTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>)  => {
    if (active && payload && payload.length) {
      return (
        <div className="extreme-custom-tooltip">
          <div className="label">{label}</div>
          <div className="desc">TIMELESS 54, TIMELESS 3</div>
          <div style={{display: "flex", flexWrap: "wrap", gap: 8, maxWidth: 420}}>
            {payload.map((pld) => (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ color: pld.color, display: "flex", alignItems: "left", gap: 4 }}>
                        <div style={{ background: pld.color, width: 12, height: 12, borderRadius: 4, marginTop: 2, marginBottom: 2 }}></div>
                        <div>{pld.dataKey}: {pld.value}</div>
                    </div>
                    <div className="desc">Currency = RUB</div>
                    <div className="desc">Pay Type = Cash</div>
                    <div className="desc">Day Time = Evening, Night</div>
                </div>
            ))}
          </div>
          <div className="desc">Total: {payload[0].value}</div>
        </div>
      );
    }
  
    return null;
  };  


const generateWeekData = (weeksCount: any, year = 2025) => {
  return Array.from({ length: weeksCount }, (_, i) => ({
    name: `${i + 1} Week ${year}`,
    "Revenue Net": Math.round(Math.random() * 10000),
    "Avg Check Per Guest": Math.round(Math.random() * 10000),
    "Income Accumulated": Math.round(Math.random() * 10000),
    "Profit Gross Per M²": Math.round(Math.random() * 10000),
    "Revenue Gross": Math.round(Math.random() * 10000),
    "Revenue": Math.round(Math.random() * 10000),
    "Expense Per Seat": Math.round(Math.random() * 10000),
    "Revenue Net Accumulated": Math.round(Math.random() * 10000),
    "Discount Loyalty": Math.round(Math.random() * 10000),
    "Avg Check Per Hour": Math.round(Math.random() * 10000),
    "Avg Check Per Table": Math.round(Math.random() * 10000),
    "Table Occupancy Rate": Math.round(Math.random() * 10000),
    "CSI": Math.round(Math.random() * 10000),
    "Checks Count": Math.round(Math.random() * 10000),
  }));
};

const data = generateWeekData(23);

function ExtremeDataChart() {
  const [isColumnChart, setIsColumnChart] = useState(false);
  return (
    <div style={{ width: '100%', height: 300, display: "flex", flexDirection:"column", alignItems: "center" }}>
      <div style={{display: "flex", gap: 16}}>
        <span className='title'>Extreme Data Chart</span>
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
                <YAxis className="App" />
                <Tooltip 
                    content={<ExtremeCustomTooltip />}
                    cursor={{
                        strokeDasharray: "3 3",
                        stroke: '#777677',
                        strokeOpacity: 0.5,
                    }} 
                />
                <Legend />
                <Bar dataKey="Revenue Net" fill="#FF8B1F" />
                <Bar dataKey="Avg Check Per Guest" fill="#04E762" />
                <Bar dataKey="Income Accumulated" fill="#3370FF" />
                <Bar dataKey="Profit Gross Per M²" fill="#9DFF6F" />
                <Bar dataKey="Revenue Gross" fill="#FF2C47" />
                <Bar dataKey="Revenue" fill="#B15DE8" />
                <Bar dataKey="Expense Per Seat" fill="#FFBE99" />
                <Bar dataKey="Revenue Net Accumulated" fill="#DABFFF" />
                <Bar dataKey="Discount Loyalty" fill="#FFF047" />
                <Bar dataKey="Avg Check Per Hour" fill="#DCD8D3" />
                <Bar dataKey="Avg Check Per Table" fill="#FF8ADE" />
                <Bar dataKey="Table Occupancy Rate" fill="#99FFF8" />
                <Bar dataKey="CSI" fill="#CF7B5A" />
                <Bar dataKey="Checks Count" fill="#63C7FF" />
            </BarChart>
        </ResponsiveContainer>
        ) : (
          <ResponsiveContainer height={420} width="100%">
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
                <YAxis className="App" />
                <Tooltip 
                    content={<ExtremeCustomTooltip />}
                    cursor={{
                        strokeDasharray: "3 3",
                        stroke: '#777677',
                        strokeOpacity: 0.5,
                    }} 
                />
                <Legend />
                <Line type="monotone" dataKey="Revenue Net" stroke="#FF8B1F" dot={{ fill: '#FF8B1F' }} activeDot={{ stroke: '#FF8B1F', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="Avg Check Per Guest" stroke="#04E762" dot={{ fill: '#04E762' }} activeDot={{ stroke: '#04E762', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="Income Accumulated" stroke="#3370FF" dot={{ fill: '#3370FF' }} activeDot={{ stroke: '#3370FF', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="Profit Gross Per M²" stroke="#9DFF6F" dot={{ fill: '#9DFF6F' }} activeDot={{ stroke: '#9DFF6F', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="Revenue Gross" stroke="#FF2C47" dot={{ fill: '#FF2C47' }} activeDot={{ stroke: '#FF2C47', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="Revenue" stroke="#B15DE8" dot={{ fill: '#B15DE8' }} activeDot={{ stroke: '#B15DE8', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="Expense Per Seat" stroke="#FFBE99" dot={{ fill: '#FFBE99' }} activeDot={{ stroke: '#FFBE99', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="Revenue Net Accumulated" stroke="#DABFFF" dot={{ fill: '#DABFFF' }} activeDot={{ stroke: '#DABFFF', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="Discount Loyalty" stroke="#FFF047" dot={{ fill: '#FFF047' }} activeDot={{ stroke: '#FFF047', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="Avg Check Per Hour" stroke="#DCD8D3" dot={{ fill: '#DCD8D3' }} activeDot={{ stroke: '#DCD8D3', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="Avg Check Per Table" stroke="#FF8ADE" dot={{ fill: '#FF8ADE' }} activeDot={{ stroke: '#FF8ADE', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="Table Occupancy Rate" stroke="#99FFF8" dot={{ fill: '#99FFF8' }} activeDot={{ stroke: '#99FFF8', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="CSI" stroke="#CF7B5A" dot={{ fill: '#CF7B5A' }} activeDot={{ stroke: '#CF7B5A', strokeWidth: 2 }} />
                <Line type="monotone" dataKey="Checks Count" stroke="#63C7FF" dot={{ fill: '#63C7FF' }} activeDot={{ stroke: '#63C7FF', strokeWidth: 2 }} />
            </LineChart>
        </ResponsiveContainer>
        )
      }
    </div>
  );
}

export default ExtremeDataChart;