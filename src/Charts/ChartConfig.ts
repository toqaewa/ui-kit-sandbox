export const ChartConfig = [
    {
        group: "Финансовые показатели",
        metrics: [
            { 
                key: 'hasRevenueNet',
                label: 'Revenue Net',
                lineProps: { yAxisId: "left", type: "monotone", dataKey: "Revenue Net", stroke: "#FF8B1F" },
                barProps: { yAxisId: "left", dataKey: "Revenue Net", fill: "#FF8B1F" }
            },
            { 
                key: 'hasAvgCheckPerGuest',
                label: 'Avg Check Per Guest',
                lineProps: { yAxisId: "left", type: "monotone", dataKey: "Avg Check Per Guest", stroke: "#04E762" },
                barProps: { yAxisId: "left", dataKey: "Avg Check Per Guest", fill: "#04E762" }
            },
            { 
                key: 'hasIncomeAccumulated',
                label: 'Income Accumulated',
                lineProps: { yAxisId: "left", type: "monotone", dataKey: "Income Accumulated", stroke: "#3370FF" },
                barProps: { yAxisId: "left", dataKey: "Avg Check Per Guest", fill: "#3370FF" }
            },
            { 
                key: 'hasProfitGrossPerM2',
                label: 'Profit Gross Per M²',
                lineProps: { yAxisId: "left", type: "monotone", dataKey: "Profit Gross Per M²", stroke: "#9DFF6F" },
                barProps: { yAxisId: "left", dataKey: "Avg Check Per Guest", fill: "#9DFF6F" }
            },
            { 
                key: 'hasRevenueGross',
                label: 'Revenue Gross',
                lineProps: { yAxisId: "left", type: "monotone", dataKey: "Revenue Gross", stroke: "#FF2C47" },
                barProps: { yAxisId: "left", dataKey: "Avg Check Per Guest", fill: "#FF2C47" }
            },
            { 
                key: 'hasProfit',
                label: 'Profit',
                lineProps: { yAxisId: "left", type: "monotone", dataKey: "Profit", stroke: "#B15DE8" },
                barProps: { yAxisId: "left", dataKey: "Avg Check Per Guest", fill: "#B15DE8" }
            },
            { 
                key: 'hasExpensePerSeat',
                label: 'Expense Per Seat',
                lineProps: { yAxisId: "left", type: "monotone", dataKey: "Expense Per Seat", stroke: "#FFBE99" },
                barProps: { yAxisId: "left", dataKey: "Avg Check Per Guest", fill: "#FFBE99" }
            },
            { 
                key: 'hasRevenueNetAccumulated',
                label: 'Revenue Net Accumulated',
                lineProps: { yAxisId: "left", type: "monotone", dataKey: "Revenue Net Accumulated", stroke: "#DABFFF" },
                barProps: { yAxisId: "left", dataKey: "Avg Check Per Guest", fill: "#DABFFF" }
            },
            { 
                key: 'hasDiscountLoyalty',
                label: 'Discount Loyalty',
                lineProps: { yAxisId: "left", type: "monotone", dataKey: "Discount Loyalty", stroke: "#FFF047" },
                barProps: { yAxisId: "left", dataKey: "Avg Check Per Guest", fill: "#FFF047" }
            },
            { 
                key: 'hasAvgCheckPerHour',
                label: 'Avg Check Per Hour',
                lineProps: { yAxisId: "left", type: "monotone", dataKey: "Avg Check Per Hour", stroke: "#DCD8D3" },
                barProps: { yAxisId: "left", dataKey: "Avg Check Per Guest", fill: "#DCD8D3" }
            },
            { 
                key: 'hasAvgCheckPerTable',
                label: 'Avg Check Per Table',
                lineProps: { yAxisId: "left", type: "monotone", dataKey: "Avg Check Per Table", stroke: "#FF8ADE" },
                barProps: { yAxisId: "left", dataKey: "Avg Check Per Guest", fill: "#FF8ADE" }
            },
            {
                key: 'hasChecksCount',
                label: 'Checks Count',
                lineProps: { yAxisId: "left", type: "monotone", dataKey: "Checks Count", stroke: "#63C7FF" },
                barProps: { yAxisId: "left", dataKey: "Avg Check Per Guest", fill: "#63C7FF" }
            },
        ],
    }
];