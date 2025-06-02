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
import { generateBadMonthlyData, generateBadWeeklyData, generateMonthlyData, generateWeeklyData } from "./chartData"
import CustomTooltip from './CustomTooltip';
import ChartSettings from './ChartSettings';
import { ChartSettingsState } from './chartSettingsTypes';
import Toggle from '../Toggle/Toggle';

const weeklyData = generateWeeklyData(69);
const monthlyData = generateMonthlyData(2024, 0, 2025, 3); // Jan 2024 - Apr 2025

function ComparedChart() {
  const [isColumnChart, setIsColumnChart] = useState(false);
  const [isWeekly, setIsWeekly] = useState(false);
  const [isCompared, setIsCompared] = useState(true);
  
  const [chartSettings, setChartSettings] = useState<ChartSettingsState>({
    hasRevenueNet: true,
    hasAvgCheckPerGuest: false,
    hasIncomeAccumulated: false,
    hasProfitGrossPerM2: false,
    hasRevenueGross: false,
    hasProfit: false,
    hasExpensePerSeat: false,
    hasRevenueNetAccumulated: false,
    hasDiscountLoyalty: false,
    hasAvgCheckPerHour: false,
    hasAvgCheckPerTable: false,
    hasCSI: false,
    hasChecksCount: false,
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
        <span className='title'>Compared Chart</span>
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
        <Toggle 
          label='Сравнить с предыдущим периодом'
          initialValue={isCompared}
          onChange={setIsCompared}
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
                  {chartSettings.hasRevenueNet && isCompared && (
                    <Line yAxisId="left" type="monotone" dataKey="Revenue Net Prev" stroke="#FF8B1F" strokeDasharray="3 3" dot={{ fill: '#FF8B1F' }} activeDot={{ stroke: '#FF8B1F', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasAvgCheckPerGuest && (
                    <Line yAxisId="left" type="monotone" dataKey="Avg Check Per Guest" stroke="#04E762" dot={{ fill: '#04E762' }} activeDot={{ stroke: '#04E762', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasAvgCheckPerGuest && isCompared && (
                    <Line yAxisId="left" type="monotone" dataKey="Avg Check Per Guest Prev" stroke="#04E762" strokeDasharray="3 3" dot={{ fill: '#04E762' }} activeDot={{ stroke: '#04E762', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasIncomeAccumulated && (
                    <Area yAxisId="left" type="monotone" dataKey="Income Accumulated" stroke="#3370FF" dot={{ fill: '#3370FF' }} activeDot={{ stroke: '#3370FF', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasIncomeAccumulated && isCompared && (
                    <Area yAxisId="left" type="monotone" dataKey="Income Accumulated Prev" stroke="#3370FF" strokeDasharray="3 3" dot={{ fill: '#3370FF' }} activeDot={{ stroke: '#3370FF', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasProfitGrossPerM2 && (
                    <Line yAxisId="left" type="monotone" dataKey="Profit Gross Per M²" stroke="#9DFF6F" dot={{ fill: '#9DFF6F' }} activeDot={{ stroke: '#9DFF6F', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasProfitGrossPerM2 && isCompared && (
                    <Line yAxisId="left" type="monotone" dataKey="Profit Gross Per M² Prev" stroke="#9DFF6F" strokeDasharray="3 3" dot={{ fill: '#9DFF6F' }} activeDot={{ stroke: '#9DFF6F', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasRevenueGross && (
                    <Line yAxisId="left" type="monotone" dataKey="Revenue Gross" stroke="#FF2C47" dot={{ fill: '#FF2C47' }} activeDot={{ stroke: '#FF2C47', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasRevenueGross && isCompared && (
                    <Line yAxisId="left" type="monotone" dataKey="Revenue Gross Prev" stroke="#FF2C47" strokeDasharray="3 3" dot={{ fill: '#FF2C47' }} activeDot={{ stroke: '#FF2C47', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasProfit && (
                    <Line yAxisId="left" type="monotone" dataKey="Revenue" stroke="#B15DE8" dot={{ fill: '#B15DE8' }} activeDot={{ stroke: '#B15DE8', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasProfit && isCompared && (
                    <Line yAxisId="left" type="monotone" dataKey="Revenue Prev" stroke="#B15DE8" strokeDasharray="3 3" dot={{ fill: '#B15DE8' }} activeDot={{ stroke: '#B15DE8', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasExpensePerSeat && (
                    <Line yAxisId="left" type="monotone" dataKey="Expense Per Seat" stroke="#FFBE99" dot={{ fill: '#FFBE99' }} activeDot={{ stroke: '#FFBE99', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasExpensePerSeat && isCompared && (
                    <Line yAxisId="left" type="monotone" dataKey="Expense Per Seat Prev" stroke="#FFBE99" strokeDasharray="3 3" dot={{ fill: '#FFBE99' }} activeDot={{ stroke: '#FFBE99', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasRevenueNetAccumulated && (
                    <Area yAxisId="left" type="monotone" dataKey="Revenue Net Accumulated" stroke="#DABFFF" dot={{ fill: '#DABFFF' }} activeDot={{ stroke: '#DABFFF', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasRevenueNetAccumulated && isCompared && (
                    <Area yAxisId="left" type="monotone" dataKey="Revenue Net Accumulated Prev" stroke="#DABFFF" strokeDasharray="3 3" dot={{ fill: '#DABFFF' }} activeDot={{ stroke: '#DABFFF', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasDiscountLoyalty && (
                    <Line yAxisId="left" type="monotone" dataKey="Discount Loyalty" stroke="#FFF047" dot={{ fill: '#FFF047' }} activeDot={{ stroke: '#FFF047', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasDiscountLoyalty && isCompared && (
                    <Line yAxisId="left" type="monotone" dataKey="Discount Loyalty Prev" stroke="#FFF047" strokeDasharray="3 3" dot={{ fill: '#FFF047' }} activeDot={{ stroke: '#FFF047', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasAvgCheckPerHour && (
                    <Line yAxisId="left" type="monotone" dataKey="Avg Check Per Hour" stroke="#DCD8D3" dot={{ fill: '#DCD8D3' }} activeDot={{ stroke: '#DCD8D3', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasAvgCheckPerHour && isCompared && (
                    <Line yAxisId="left" type="monotone" dataKey="Avg Check Per Hour Prev" stroke="#DCD8D3" strokeDasharray="3 3" dot={{ fill: '#DCD8D3' }} activeDot={{ stroke: '#DCD8D3', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasAvgCheckPerTable && (
                    <Line yAxisId="left" type="monotone" dataKey="Avg Check Per Table" stroke="#FF8ADE" dot={{ fill: '#FF8ADE' }} activeDot={{ stroke: '#FF8ADE', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasAvgCheckPerTable && isCompared && (
                    <Line yAxisId="left" type="monotone" dataKey="Avg Check Per Table Prev" stroke="#FF8ADE" strokeDasharray="3 3" dot={{ fill: '#FF8ADE' }} activeDot={{ stroke: '#FF8ADE', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasChecksCount && (
                    <Line yAxisId="right" type="monotone" dataKey="Checks Count" stroke="#63C7FF" dot={{ fill: '#63C7FF' }} activeDot={{ stroke: '#63C7FF', strokeWidth: 2 }} />
                  )}
                  {chartSettings.hasChecksCount && isCompared && (
                    <Line yAxisId="right" type="monotone" dataKey="Checks Count Prev" stroke="#63C7FF" strokeDasharray="3 3" dot={{ fill: '#63C7FF' }} activeDot={{ stroke: '#63C7FF', strokeWidth: 2 }} />
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
                  {chartSettings.hasRevenueNet && isCompared && (
                    <Bar yAxisId="left" dataKey="Revenue Net Prev" fill="#FF8B1F" fillOpacity={0.3}/>
                  )}
                  {chartSettings.hasRevenueNet && (
                    <Bar yAxisId="left" dataKey="Revenue Net" fill="#FF8B1F" />
                  )}
                  {chartSettings.hasAvgCheckPerGuest && isCompared && (
                    <Bar yAxisId="left" dataKey="Avg Check Per Guest Prev" fill="#04E762" fillOpacity={0.3} />
                  )}
                  {chartSettings.hasAvgCheckPerGuest && (
                    <Bar yAxisId="left" dataKey="Avg Check Per Guest" fill="#04E762" />
                  )}
                  {chartSettings.hasIncomeAccumulated && isCompared && (
                    <Bar yAxisId="left" dataKey="Income Accumulated Prev" fill="#3370FF" fillOpacity={0.3} />
                  )}
                  {chartSettings.hasIncomeAccumulated && (
                    <Bar yAxisId="left" dataKey="Income Accumulated" fill="#3370FF" />
                  )}
                  {chartSettings.hasProfitGrossPerM2 && isCompared && (
                    <Bar yAxisId="left" dataKey="Profit Gross Per M² Prev" fill="#9DFF6F" fillOpacity={0.3} />
                  )}
                  {chartSettings.hasProfitGrossPerM2 && (
                    <Bar yAxisId="left" dataKey="Profit Gross Per M²" fill="#9DFF6F" />
                  )}
                  {chartSettings.hasRevenueGross && isCompared && (
                    <Bar yAxisId="left" dataKey="Revenue Gross Prev" fill="#FF2C47" fillOpacity={0.3} />
                  )}
                  {chartSettings.hasRevenueGross && (
                    <Bar yAxisId="left" dataKey="Revenue Gross" fill="#FF2C47" />
                  )}
                  {chartSettings.hasProfit && isCompared && (
                    <Bar yAxisId="left" dataKey="Revenue Prev" fill="#B15DE8" fillOpacity={0.3} />
                  )}
                  {chartSettings.hasProfit && (
                    <Bar yAxisId="left" dataKey="Revenue" fill="#B15DE8" />
                  )}
                  {chartSettings.hasExpensePerSeat && isCompared && (
                    <Bar yAxisId="left" dataKey="Expense Per Seat Prev" fill="#FFBE99" fillOpacity={0.3} />
                  )}
                  {chartSettings.hasExpensePerSeat && (
                    <Bar yAxisId="left" dataKey="Expense Per Seat" fill="#FFBE99" />
                  )}
                  {chartSettings.hasRevenueNetAccumulated && isCompared && (
                    <Bar yAxisId="left" dataKey="Revenue Net Accumulated Prev" fill="#DABFFF" fillOpacity={0.3} />
                  )}
                  {chartSettings.hasRevenueNetAccumulated && (
                    <Bar yAxisId="left" dataKey="Revenue Net Accumulated" fill="#DABFFF" />
                  )}
                  {chartSettings.hasDiscountLoyalty && isCompared && (
                    <Bar yAxisId="left" dataKey="Discount Loyalty Prev" fill="#FFF047" fillOpacity={0.3} />
                  )}
                  {chartSettings.hasDiscountLoyalty && (
                    <Bar yAxisId="left" dataKey="Discount Loyalty" fill="#FFF047" />
                  )}
                  {chartSettings.hasAvgCheckPerHour && isCompared && (
                    <Bar yAxisId="left" dataKey="Avg Check Per Hour Prev" fill="#DCD8D3" fillOpacity={0.3} />
                  )}
                  {chartSettings.hasAvgCheckPerHour && (
                    <Bar yAxisId="left" dataKey="Avg Check Per Hour" fill="#DCD8D3" />
                  )}
                  {chartSettings.hasAvgCheckPerTable && isCompared && (
                    <Bar yAxisId="left" dataKey="Avg Check Per Table Prev" fill="#FF8ADE" fillOpacity={0.3} />
                  )}
                  {chartSettings.hasAvgCheckPerTable && (
                    <Bar yAxisId="left" dataKey="Avg Check Per Table" fill="#FF8ADE" />
                  )}
                  {chartSettings.hasChecksCount && isCompared && (
                    <Bar yAxisId="right" dataKey="Checks Count Prev" fill="#63C7FF" fillOpacity={0.3} />
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

export default ComparedChart;