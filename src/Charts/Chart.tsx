import React, { JSX, useState } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Chart.css";
import {
  generateBadMonthlyData,
  generateBadWeeklyData,
  generateMonthlyData,
  generateWeeklyData,
  chartDataConfig,
} from "./chartData";
import CustomTooltip from "./CustomTooltip";
import ChartSettings from "./ChartSettings";
import { ChartSettingsState } from "./chartSettingsTypes";
import Toggle from "../Toggle/Toggle";
import { StripedBar } from "./CustomBar";

const weeklyData = generateWeeklyData(69);
const monthlyData = generateMonthlyData(2024, 0, 2025, 3); // Jan 2024 - Apr 2025
const badWeeklyData = generateBadWeeklyData(69);
const badMonthlyData = generateBadMonthlyData(2024, 0, 2025, 3); // Jan 2024 - Apr 2025 но с пробелами

function Chart() {
  const [isColumnChart, setIsColumnChart] = useState(false);
  const [isWeekly, setIsWeekly] = useState(false);
  const [isCompared, setIsCompared] = useState(false);
  const [isBadData, setIsBadData] = useState(false);

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

  const handleSettingChange = (
    key: keyof ChartSettingsState,
    value: boolean
  ) => {
    setChartSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const getChartData = () => {
    if (isWeekly && !isBadData) return weeklyData;
    if (isWeekly && isBadData) return badWeeklyData;
    if (!isWeekly && !isBadData) return monthlyData;
    if (!isWeekly && isBadData) return badMonthlyData;
    return [];
  };

  const renderChartElements = () => {
    return chartDataConfig.flatMap(config => {
      if (!chartSettings[config.key as keyof ChartSettingsState]) return [];
      
      const elements = [];
      const prevDataKey = `${config.dataKey} Prev`;

      if (isColumnChart && isCompared) {
        elements.push(
          <Bar 
            key={prevDataKey}
            yAxisId={config.yAxisId} 
            dataKey={prevDataKey} 
            fill={config.color} 
            shape={<StripedBar />}
          />
        );
      }

      if (isColumnChart) {
        elements.push(
          <Bar 
            key={config.dataKey}
            yAxisId={config.yAxisId} 
            dataKey={config.dataKey} 
            fill={config.color} 
          />
        );
      } else {
        const Element = config.isAccumulated ? Area : Line;
        elements.push(
          <Element 
            key={config.dataKey}
            yAxisId={config.yAxisId} 
            type="monotone" 
            dataKey={config.dataKey} 
            stroke={config.color} 
            dot={{ fill: config.color }} 
            activeDot={{ stroke: config.color, strokeWidth: 2 }} 
          />
        );

        if (isCompared) {
          elements.push(
            <Element 
              key={prevDataKey}
              yAxisId={config.yAxisId} 
              type="monotone" 
              dataKey={prevDataKey} 
              stroke={config.color} 
              strokeDasharray="3 3"
              dot={{ fill: config.color }} 
              activeDot={{ stroke: config.color, strokeWidth: 2 }} 
            />
          );
        }
      }

      return elements;
    });
  };

  return (
    <div className="bg">
      <div style={{ display: "flex", gap: 16 }}>
        <span className="title">Chart Component</span>
        <Toggle
          label="Column Chart"
          initialValue={isColumnChart}
          onChange={setIsColumnChart}
        />
        <Toggle
          label="Разбить по неделям"
          initialValue={isWeekly}
          onChange={setIsWeekly}
        />
        <Toggle
          label="Сравнить с предыдущим периодом"
          initialValue={isCompared}
          onChange={setIsCompared}
        />
        <Toggle
          label="Сгенерировать данные с пробелами"
          initialValue={isBadData}
          onChange={setIsBadData}
        />
      </div>
      <div style={{ zIndex: 10000 }}>
        <ResponsiveContainer height={420} width="100%">
          <ComposedChart 
            data={getChartData()}
            margin={{
              top: 12,
              right: 0,
              left: 0,
              bottom: 24,
            }} 
          >
            <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" stroke='#777677' strokeOpacity={0.5} />
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
            {renderChartElements()}
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <ChartSettings settings={chartSettings} onChange={handleSettingChange} />
    </div>
  );
}

export default Chart;
