// CSI - спорная история, пока не включаю в график ее

import React, { useState, useEffect } from "react";
import "./Chart.css"

import { ChartSettingsState } from "./chartSettingsTypes"

import Checkbox from "../Checkbox/Checkbox";

interface ChartSettingsProps {
    settings: ChartSettingsState;
    onChange: (key: keyof ChartSettingsState, value: boolean) => void;
}

const ChartSettings: React.FC<ChartSettingsProps> = ({ settings, onChange }) => {

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Checkbox 
                label="Revenue Net"
                initialValue={settings.hasRevenueNet}
                onChange={(value) => onChange('hasRevenueNet', value)}
            />
            <Checkbox 
                label="Avg Check Per Guest"
                initialValue={settings.hasAvgCheckPerGuest}
                onChange={(value) => onChange('hasAvgCheckPerGuest', value)}
            />
            <Checkbox 
                label="Income Accumulated"
                initialValue={settings.hasIncomeAccumulated}
                onChange={(value) => onChange('hasIncomeAccumulated', value)}
            />
            <Checkbox 
                label="Profit Gross Per M²"
                initialValue={settings.hasProfitGrossPerM2}
                onChange={(value) => onChange('hasProfitGrossPerM2', value)}
            />
            <Checkbox 
                label="Revenue Gross"
                initialValue={settings.hasRevenueGross}
                onChange={(value) => onChange('hasRevenueGross', value)}
            />
            <Checkbox 
                label="Profit"
                initialValue={settings.hasProfit}
                onChange={(value) => onChange('hasProfit', value)}
            />
            <Checkbox 
                label="Expense Per Seat"
                initialValue={settings.hasExpensePerSeat}
                onChange={(value) => onChange('hasExpensePerSeat', value)}
            />
            <Checkbox 
                label="Revenue Net Accumulated"
                initialValue={settings.hasRevenueNetAccumulated}
                onChange={(value) => onChange('hasRevenueNetAccumulated', value)}
            />
            <Checkbox 
                label="Discount Loyalty"
                initialValue={settings.hasDiscountLoyalty}
                onChange={(value) => onChange('hasDiscountLoyalty', value)}
            />
            <Checkbox 
                label="Avg Check Per Hour"
                initialValue={settings.hasAvgCheckPerHour}
                onChange={(value) => onChange('hasAvgCheckPerHour', value)}
            />
            <Checkbox 
                label="Avg Check Per Table"
                initialValue={settings.hasAvgCheckPerTable}
                onChange={(value) => onChange('hasAvgCheckPerTable', value)}
            />
            {/* <Checkbox 
                label="CSI"
                initialValue={settings.hasCSI}
                onChange={handleChange('hasCSI')}
            /> */}
            <Checkbox 
                label="Checks Count"
                initialValue={settings.hasChecksCount}
                onChange={(value) => onChange('hasChecksCount', value)}
            />
        </div>
    )
} 

export default ChartSettings;