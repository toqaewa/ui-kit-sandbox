// CSI - спорная история, пока не включаю в график ее

import React, { useState, useEffect } from "react";
import "./Chart.css"

import { ChartSettingsState } from "./chartSettingsTypes"

import Checkbox from "../Checkbox/Checkbox";

interface ChartSettingsProps {
    settings: ChartSettingsState;
    onChange: (key: keyof ChartSettingsState, value: boolean) => void;
}

const CHECKBOX_OPTIONS: Array<{
    key: keyof ChartSettingsState;
    label: string;
}> = [
    { key: 'hasRevenueNet', label: 'Revenue Net' },
    { key: 'hasAvgCheckPerGuest', label: 'Avg Check Per Guest' },
    { key: 'hasIncomeAccumulated', label: 'Income Accumulated' },
    { key: 'hasProfitGrossPerM2', label: 'Profit Gross Per M²' },
    { key: 'hasRevenueGross', label: 'Revenue Gross' },
    { key: 'hasProfit', label: 'Profit' },
    { key: 'hasExpensePerSeat', label: 'Expense Per Seat' },
    { key: 'hasRevenueNetAccumulated', label: 'Revenue Net Accumulated' },
    { key: 'hasDiscountLoyalty', label: 'Discount Loyalty' },
    { key: 'hasAvgCheckPerHour', label: 'Avg Check Per Hour' },
    { key: 'hasAvgCheckPerTable', label: 'Avg Check Per Table' },
    { key: 'hasChecksCount', label: 'Checks Count' },
    // { key: 'hasCSI', label: 'CSI' },
];

const ChartSettings: React.FC<ChartSettingsProps> = ({ settings, onChange }) => {

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {CHECKBOX_OPTIONS.map((option) => (
                <Checkbox
                    key={option.key}
                    label={option.label}
                    initialValue={settings[option.key]}
                    onChange={(value) => onChange(option.key, value)}
                />
            ))}
        </div>
    )
} 

export default ChartSettings;