import React, { useState } from 'react';
import {
  ComposedChart,
  Line,
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

const RealisticTooltip = ({ active, payload, label }: TooltipProps<ValueType, NameType>)  => {
    if (active && payload && payload.length) {
      return (
        <div className="extreme-custom-tooltip">
          <div style={{ color: "#DCD8D3", fontSize: "10px", lineHeight: "14px", textAlign: "left" }}>Jan 2024 - Apr 2025</div>
          <div className="desc" style={{ fontSize: "10px", lineHeight: "14px" }}>TIMELESS 54, TIMELESS 3</div>
          <div style={{display: "flex", flexDirection: "column", gap: 8, maxWidth: 290}}>
            {payload.map((pld) => (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", flexDirection: "row", width: 290 }}>
                    <div style={{ color: pld.color, display: "flex", alignItems: "left", gap: 4, width: 290, fontSize: "10px", lineHeight: "14px" }}>
                        <div style={{ background: pld.color, width: 8, height: 8, borderRadius: 2, marginTop: 3, marginBottom: 2 }}></div>
                        <div>{pld.dataKey}</div>
                    </div>
                    <div style={{ color: "#DCD8D3", fontWeight: "bold", fontSize: "10px", lineHeight: "14px", marginRight: 2 }}>{pld.value}</div>
                    <div style={{ color: "#DCD8D3", fontWeight: "bold", fontSize: "10px", lineHeight: "14px" }}>{pld.dataKey === "Avg Check Per Guest" ? ("$") : ("₽")}</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", width: 290, textAlign: "left", fontSize: "8px", lineHeight: "12px" }}>
                    {
                      pld.dataKey === "Revenue Net" ? ("Currency = RUB; Pay Type = Cash; Day Time = Evening, Night") : (
                        pld.dataKey === "Revenue Gross" ? ("Currency = RUB; Day Time = Night; Day = Friday; Pay Type = Cash") : (
                          pld.dataKey === "Income" ? ("Currency = RUB; Category = Merch, Consulting, Catering; Account Type = Bank Account") : (
                            pld.dataKey === "Avg Check Per Guest" ? ("Currency = RUB; Loyalty Program = With Loyalty Program; Guest Type = Returning Guest") : (
                              pld.dataKey === "Profit Gross Per M²" ? ("Currency = RUB; Product Category = Hookahs; Day Time = Morning; Day = Weekdays") : ("")
                            )
                          )
                        )
                      )
                    }
                  </div>
                </div>
            ))}
          </div>
        </div>
      );
    }
  
    return null;
  };  

const generateMonths = (startYear: number, startMonth: number, endYear: number, endMonth: number) => {
  const months = [];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let currentYear = startYear;
  let currentMonth = startMonth;

  while (
    currentYear < endYear || 
    (currentYear === endYear && currentMonth <= endMonth)
  ) {
    months.push({
      name: `${monthNames[currentMonth]} ${currentYear}`,
      year: currentYear,
      month: currentMonth,
    });

    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
  }

  return months;
};


const generateMonthlyData = (startYear: number, startMonth: number, endYear: number, endMonth: number) => {
  const months = generateMonths(startYear, startMonth, endYear, endMonth);
  
  return months.map(({ name }) => ({
    name,
    "Revenue Net": Math.round(Math.random() * 10000),
    "Revenue Gross": Math.round(Math.random() * 8000),
    "Income": Math.round(Math.random() * 6000),
    "Avg Check Per Guest": Math.round(Math.random() * 4000),
    "Profit Gross Per M²": Math.round(Math.random() * 4000),
  }));
};


const generateAccumulatedMonthlyData = (startYear: number, startMonth: number, endYear: number, endMonth: number) => {
  const months = generateMonths(startYear, startMonth, endYear, endMonth);
  
  let accumulatedIncome = 0;
  let accumulatedExpense = 0;
  let accumulatedRevenue = 0;
  let accumulatedProfit = 0;

  return months.map(({ name }) => {
    accumulatedIncome += Math.round(Math.random() * 10000);
    accumulatedExpense += Math.round(Math.random() * 8000);
    accumulatedRevenue += Math.round(Math.random() * 6000);
    accumulatedProfit += Math.round(Math.random() * 4000);

    return {
      name,
      income: accumulatedIncome,
      expense: accumulatedExpense,
      revenue: accumulatedRevenue,
      profit: accumulatedProfit,
    };
  });
};

const data = generateMonthlyData(2024, 0, 2025, 3); // Jan 2024 - Apr 2025
const accumData = generateAccumulatedMonthlyData(2024, 0, 2025, 2);

function RealisticChart() {
  return (
    <div style={{ width: '100%', height: 460, display: "flex", flexDirection:"column", alignItems: "center" }}>
      <div style={{display: "flex", gap: 16}}>
        <span className='title'>Realistic Chart</span>
      </div>
          <ResponsiveContainer>
            <ComposedChart 
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
                <YAxis className="App" yAxisId="left" />
                <YAxis className="App" yAxisId="right" orientation="right" />
                <Tooltip 
                    content={<RealisticTooltip />}
                    cursor={{
                        strokeDasharray: "3 3",
                        stroke: '#777677',
                        strokeOpacity: 0.5,
                    }} 
                />
                <Legend />
                <Bar yAxisId="left" dataKey="Revenue Net" fill="#B15DE8" />
                <Bar yAxisId="left" dataKey="Revenue Gross" fill="#63C7FF" />
                <Bar yAxisId="left" dataKey="Income" fill="#3370FF" />
                <Bar yAxisId="right" dataKey="Avg Check Per Guest" fill="#99FFF8" />
                <Line yAxisId="left" type="monotone" dataKey="Profit Gross Per M²" stroke="#9DFF6F" dot={{ fill: '#9DFF6F' }} activeDot={{ stroke: '#9DFF6F', strokeWidth: 2 }} />
            </ComposedChart>
        </ResponsiveContainer>
    </div>
  );
}

export default RealisticChart;