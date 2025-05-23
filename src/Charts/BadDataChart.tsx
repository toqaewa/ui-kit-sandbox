import React, { useState } from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import './Chart.css'
import { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";
import Toggle from '../Toggle/Toggle';
import { generateBadMonthlyData, generateBadWeeklyData, generateMonthlyData, generateWeeklyData } from "./chartData"
import CustomTooltip from './CustomTooltip';
import ChartSettings from './ChartSettings';
import { ChartSettingsState } from './chartSettingsTypes';

const weeklyData = generateWeeklyData(69);
const monthlyData = generateMonthlyData(2024, 0, 2025, 3); // Jan 2024 - Apr 2025

function BadDataChart() {
  const [isColumnChart, setIsColumnChart] = useState(false);
  const [isWeekly, setIsWeekly] = useState(false);

  const [chartSettings, setChartSettings] = useState<ChartSettingsState>({
      hasRevenueNet: true,
      hasAvgCheckPerGuest: true,
      hasIncomeAccumulated: true,
      hasProfitGrossPerM2: true,
      hasRevenueGross: true,
      hasProfit: true,
      hasExpensePerSeat: true,
      hasRevenueNetAccumulated: true,
      hasDiscountLoyalty: true,
      hasAvgCheckPerHour: true,
      hasAvgCheckPerTable: true,
      hasCSI: true,
      hasChecksCount: true,
  });
  
  const handleSettingChange = (key: keyof ChartSettingsState, value: boolean) => {
    setChartSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className='bg'>
      <div style={{display: "flex", gap: 16}}>
        <span className='title'>Bad Data Chart</span>
        <Toggle 
          label='Column Chart'
          initialValue={isColumnChart}
          onChange={setIsColumnChart}
        />
        <Toggle 
          label='Разбить по неделям'
          initialValue={isWeekly}
          onChange={setIsWeekly}
        />
      </div>
      <div style={{zIndex: 10000}}>
      {
          !isColumnChart ? (
            <ResponsiveContainer height={420} width="100%" >
              <ComposedChart 
                  data={isWeekly ? (weeklyData) : (monthlyData)}
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
                      content={<CustomTooltip />}
                      cursor={{
                          strokeDasharray: "3 3",
                          stroke: '#777677',
                          strokeOpacity: 0.5,
                      }} 
                  />
                  {chartSettings.hasRevenueNet && (
                    <Line yAxisId="left" type="monotone" dataKey="Revenue Net" stroke="#FF8B1F" dot={{ fill: '#FF8B1F' }} activeDot={{ stroke: '#FF8B1F', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasAvgCheckPerGuest && (
                    <Line yAxisId="left" type="monotone" dataKey="Avg Check Per Guest" stroke="#04E762" dot={{ fill: '#04E762' }} activeDot={{ stroke: '#04E762', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasIncomeAccumulated && (
                    <Area yAxisId="left" type="monotone" dataKey="Income Accumulated" stroke="#3370FF" dot={{ fill: '#3370FF' }} activeDot={{ stroke: '#3370FF', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasProfitGrossPerM2 && (
                    <Line yAxisId="left" type="monotone" dataKey="Profit Gross Per M²" stroke="#9DFF6F" dot={{ fill: '#9DFF6F' }} activeDot={{ stroke: '#9DFF6F', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasRevenueGross && (
                    <Line yAxisId="left" type="monotone" dataKey="Revenue Gross" stroke="#FF2C47" dot={{ fill: '#FF2C47' }} activeDot={{ stroke: '#FF2C47', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasProfit && (
                    <Line yAxisId="left" type="monotone" dataKey="Revenue" stroke="#B15DE8" dot={{ fill: '#B15DE8' }} activeDot={{ stroke: '#B15DE8', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasExpensePerSeat && (
                    <Line yAxisId="left" type="monotone" dataKey="Expense Per Seat" stroke="#FFBE99" dot={{ fill: '#FFBE99' }} activeDot={{ stroke: '#FFBE99', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasRevenueNetAccumulated && (
                    <Area yAxisId="left" type="monotone" dataKey="Revenue Net Accumulated" stroke="#DABFFF" dot={{ fill: '#DABFFF' }} activeDot={{ stroke: '#DABFFF', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasDiscountLoyalty && (
                    <Line yAxisId="left" type="monotone" dataKey="Discount Loyalty" stroke="#FFF047" dot={{ fill: '#FFF047' }} activeDot={{ stroke: '#FFF047', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasAvgCheckPerHour && (
                    <Line yAxisId="left" type="monotone" dataKey="Avg Check Per Hour" stroke="#DCD8D3" dot={{ fill: '#DCD8D3' }} activeDot={{ stroke: '#DCD8D3', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasAvgCheckPerTable && (
                    <Line yAxisId="left" type="monotone" dataKey="Avg Check Per Table" stroke="#FF8ADE" dot={{ fill: '#FF8ADE' }} activeDot={{ stroke: '#FF8ADE', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasChecksCount && (
                    <Line yAxisId="right" type="monotone" dataKey="Checks Count" stroke="#63C7FF" dot={{ fill: '#63C7FF' }} activeDot={{ stroke: '#63C7FF', strokeWidth: 2 }} />
                  )}
              </ComposedChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer height={420} width="100%" >
              <ComposedChart 
                  data={isWeekly ? (weeklyData) : (monthlyData)}
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
                      content={<CustomTooltip />}
                      cursor={{
                          strokeDasharray: "3 3",
                          stroke: '#777677',
                          strokeOpacity: 0.5,
                      }} 
                  />
                  {chartSettings.hasRevenueNet && (
                    <Bar yAxisId="left" dataKey="Revenue Net" fill="#FF8B1F" />
                  )}
                  {chartSettings.hasAvgCheckPerGuest && (
                    <Bar yAxisId="left" dataKey="Avg Check Per Guest" fill="#04E762" />
                  )}
                  {chartSettings.hasIncomeAccumulated && (
                    <Bar yAxisId="left" dataKey="Income Accumulated" fill="#3370FF" />
                  )}
                  {chartSettings.hasProfitGrossPerM2 && (
                    <Bar yAxisId="left" dataKey="Profit Gross Per M²" fill="#9DFF6F" />
                  )}
                  {chartSettings.hasRevenueGross && (
                    <Bar yAxisId="left" dataKey="Revenue Gross" fill="#FF2C47" />
                  )}
                  {chartSettings.hasProfit && (
                    <Bar yAxisId="left" dataKey="Revenue" fill="#B15DE8" />
                  )}
                  {chartSettings.hasExpensePerSeat && (
                    <Bar yAxisId="left" dataKey="Expense Per Seat" fill="#FFBE99" />
                  )}
                  {chartSettings.hasRevenueNetAccumulated && (
                    <Bar yAxisId="left" dataKey="Revenue Net Accumulated" fill="#DABFFF" />
                  )}
                  {chartSettings.hasDiscountLoyalty && (
                    <Bar yAxisId="left" dataKey="Discount Loyalty" fill="#FFF047" />
                  )}
                  {chartSettings.hasAvgCheckPerHour && (
                    <Bar yAxisId="left" dataKey="Avg Check Per Hour" fill="#DCD8D3" />
                  )}
                  {chartSettings.hasAvgCheckPerTable && (
                    <Bar yAxisId="left" dataKey="Avg Check Per Table" fill="#FF8ADE" />
                  )}
                  {chartSettings.hasChecksCount && (
                    <Bar yAxisId="right" dataKey="Checks Count" fill="#63C7FF" />
                  )}
              </ComposedChart>
            </ResponsiveContainer>
          )
        }
      </div>
      <ChartSettings
        settings={chartSettings}
        onChange={handleSettingChange}
      />
    </div>
  );
}

export default BadDataChart;