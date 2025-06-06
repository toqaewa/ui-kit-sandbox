export const generateWeeklyData = (weeksCount: number, year = 2025) => {
    let accumulatedAvgCheck = 0;
    let accumulatedChecksCount = 0;
    let accumulatedIncome = 0;
    let accumulatedExpense = 0;
    let accumulatedRevenue = 0;
    let accumulatedProfit = 0;
  
    return Array.from({ length: weeksCount }, (_, i) => {
        const checksCount = Math.round(Math.random() * 100);
        const avgCheck = Math.round(Math.random() * 1000);
        const weeklyIncome = avgCheck * checksCount;
        const weeklyExpense = Math.round(Math.random() * 5000); // расходы делаю поменьше
        const weeklyRevenue = Math.abs(weeklyIncome - weeklyExpense);
        const weeklyProfit = Math.abs(Math.round(weeklyRevenue - weeklyExpense * 0.2));  // понижающий коэффициент, типа НДС 20%
        const CSI = Math.round((Math.random() * 10) / 2);
    
        accumulatedChecksCount += checksCount;
        accumulatedAvgCheck += avgCheck;
        accumulatedIncome += weeklyIncome;
        accumulatedExpense += weeklyExpense;
        accumulatedRevenue += weeklyRevenue;
        accumulatedProfit += weeklyProfit;
    
        return {
            name: `${i + 1} Week ${year}`,
            "Revenue Net": Math.round(weeklyRevenue * 0.9),
            "Avg Check Per Guest": Math.round(avgCheck / 3), 
            "Income Accumulated": accumulatedIncome,
            "Profit Gross Per M²": Math.round(weeklyProfit / 70),
            "Revenue Gross": weeklyRevenue,
            "Profit": weeklyProfit,
            "Expense Per Seat": Math.round(weeklyExpense / 70),
            "Revenue Net Accumulated": Math.round(accumulatedRevenue * 0.9),
            "Discount Loyalty": Math.round(avgCheck * 0.9),
            "Avg Check Per Hour": Math.round(avgCheck / 2),
            "Avg Check Per Table": Math.round(avgCheck / 70),
            "CSI": CSI,
            "Checks Count": checksCount,
            "Revenue Net Prev": Math.round(Math.round(weeklyRevenue * 0.9) * Math.random() * 2),
            "Avg Check Per Guest Prev": Math.round(Math.round(avgCheck / 3) * Math.random() * 2), 
            "Income Accumulated Prev": Math.round(accumulatedIncome * Math.random() * 2),
            "Profit Gross Per M² Prev": Math.round(Math.round(weeklyProfit / 70) * Math.random() * 2),
            "Revenue Gross Prev": Math.round(weeklyRevenue * Math.random() * 2),
            "Profit Prev": Math.round(weeklyProfit * Math.random() * 2),
            "Expense Per Seat Prev": Math.round(Math.round(weeklyExpense / 70) * Math.random() * 2),
            "Revenue Net Accumulated Prev": Math.round(Math.round(accumulatedRevenue * 0.9) * Math.random() * 2),
            "Discount Loyalty Prev": Math.round(Math.round(avgCheck * 0.9) * Math.random() * 2),
            "Avg Check Per Hour Prev": Math.round(Math.round(avgCheck / 2) * Math.random() * 2),
            "Avg Check Per Table Prev": Math.round(Math.round(avgCheck / 70) * Math.random() * 2),
            "CSI Prev": Math.round(CSI * Math.random() * 2),
            "Checks Count Prev": Math.round(checksCount * Math.random() * 2),
        };
    });
};

export const generateBadWeeklyData = (weeksCount: number, year = 2025) => {
  let accumulatedAvgCheck = 0;
  let accumulatedChecksCount = 0;
  let accumulatedIncome = 0;
  let accumulatedExpense = 0;
  let accumulatedRevenue = 0;
  let accumulatedProfit = 0;

  return Array.from({ length: weeksCount }, (_, i) => {
      const checksCount = Math.round(Math.random() * 100);
      const avgCheck = Math.round(Math.random() * 1000);
      const weeklyIncome = avgCheck * checksCount;
      const weeklyExpense = Math.round(Math.random() * 5000); // расходы делаю поменьше
      const weeklyRevenue = Math.abs(weeklyIncome - weeklyExpense);
      const weeklyProfit = Math.abs(Math.round(weeklyRevenue - weeklyExpense * 0.2));  // понижающий коэффициент, типа НДС 20%
      const CSI = Math.round((Math.random() * 10) / 2);
  
      accumulatedChecksCount += checksCount;
      accumulatedAvgCheck += avgCheck;
      accumulatedIncome += weeklyIncome;
      accumulatedExpense += weeklyExpense;
      accumulatedRevenue += weeklyRevenue;
      accumulatedProfit += weeklyProfit;
  
      return {
          name: `${i + 1} Week ${year}`,
          "Revenue Net": weeklyRevenue > 20000 ? Math.round(weeklyRevenue * 0.9) : undefined,
          "Avg Check Per Guest": avgCheck > 200 ? Math.round(avgCheck / 3) : undefined, 
          "Income Accumulated": weeklyIncome > 20000 ? accumulatedIncome : undefined,
          "Profit Gross Per M²": weeklyRevenue > 20000 ? Math.round(weeklyProfit / 70) : undefined,
          "Revenue Gross": weeklyRevenue > 20000 ? weeklyRevenue : undefined,
          "Profit": weeklyRevenue > 20000 ? weeklyProfit : undefined,
          "Expense Per Seat": weeklyExpense > 2000 ? Math.round(weeklyExpense / 70) : undefined,
          "Revenue Net Accumulated": weeklyRevenue > 20000 ? Math.round(accumulatedRevenue * 0.9) : undefined,
          "Discount Loyalty": avgCheck > 200 ? Math.round(avgCheck * 0.9) : undefined,
          "Avg Check Per Hour": avgCheck > 200 ? Math.round(avgCheck / 2) : undefined,
          "Avg Check Per Table": avgCheck > 200 ? Math.round(avgCheck / 70) : undefined,
          "CSI": CSI > 2 ? CSI : undefined,
          "Checks Count": checksCount > 2 ? checksCount : undefined,
          "Revenue Net Prev": weeklyRevenue > 20000 ? Math.round(Math.round(weeklyRevenue * 0.9) * Math.random() * 2) : undefined,
          "Avg Check Per Guest Prev": avgCheck > 200? Math.round(Math.round(avgCheck / 3) * Math.random() * 2): undefined, 
          "Income Accumulated Prev": weeklyIncome > 20000 ? Math.round(accumulatedIncome * Math.random() * 2) : undefined,
          "Profit Gross Per M² Prev": weeklyRevenue > 20000 ? Math.round(Math.round(weeklyProfit / 70) * Math.random() * 2) : undefined,
          "Revenue Gross Prev": weeklyRevenue > 20000 ? Math.round(weeklyRevenue * Math.random() * 2) : undefined,
          "Profit Prev": weeklyRevenue > 20000 ? Math.round(weeklyProfit * Math.random() * 2) : undefined,
          "Expense Per Seat Prev": weeklyExpense > 2000 ? Math.round(Math.round(weeklyExpense / 70) * Math.random() * 2) : undefined,
          "Revenue Net Accumulated Prev": weeklyRevenue > 20000 ? Math.round(Math.round(accumulatedRevenue * 0.9) * Math.random() * 2) : undefined,
          "Discount Loyalty Prev": avgCheck > 200 ? Math.round(Math.round(avgCheck * 0.9) * Math.random() * 2) : undefined,
          "Avg Check Per Hour Prev": avgCheck > 200 ? Math.round(Math.round(avgCheck / 2) * Math.random() * 2) : undefined,
          "Avg Check Per Table Prev": avgCheck > 200 ? Math.round(Math.round(avgCheck / 70) * Math.random() * 2) : undefined,
          "CSI Prev": CSI > 2 ? Math.round(CSI * Math.random() * 2) : undefined,
          "Checks Count Prev": checksCount > 2 ? Math.round(checksCount * Math.random() * 2) : undefined,
      };
  });
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


export const generateMonthlyData = (startYear: number, startMonth: number, endYear: number, endMonth: number) => {
  const months = generateMonths(startYear, startMonth, endYear, endMonth);

  let accumulatedAvgCheck = 0;
  let accumulatedChecksCount = 0;
  let accumulatedIncome = 0;
  let accumulatedExpense = 0;
  let accumulatedRevenue = 0;
  let accumulatedProfit = 0;

  return months.map(({ name }) => {
    const checksCount = Math.round(Math.random() * 100);
    const avgCheck = Math.round(Math.random() * 1000);
    const weeklyIncome = avgCheck * checksCount;
    const weeklyExpense = Math.round(Math.random() * 5000); // расходы делаю поменьше
    const weeklyRevenue = Math.abs(weeklyIncome - weeklyExpense);
    const weeklyProfit = Math.abs(Math.round(weeklyRevenue - weeklyExpense * 0.2));  // понижающий коэффициент, типа НДС 20%
    const CSI = Math.round((Math.random() * 10) / 2);

    accumulatedChecksCount += checksCount;
    accumulatedAvgCheck += avgCheck;
    accumulatedIncome += weeklyIncome;
    accumulatedExpense += weeklyExpense;
    accumulatedRevenue += weeklyRevenue;
    accumulatedProfit += weeklyProfit;

    return {
      name,
      "Revenue Net": Math.round(weeklyRevenue * 0.9),
      "Avg Check Per Guest": Math.round(avgCheck / 3), 
      "Income Accumulated": accumulatedIncome,
      "Profit Gross Per M²": Math.round(weeklyProfit / 70),
      "Revenue Gross": weeklyRevenue,
      "Profit": weeklyProfit,
      "Expense Per Seat": Math.round(weeklyExpense / 70),
      "Revenue Net Accumulated": Math.round(accumulatedRevenue * 0.9),
      "Discount Loyalty": Math.round(avgCheck * 0.9),
      "Avg Check Per Hour": Math.round(avgCheck / 2),
      "Avg Check Per Table": Math.round(avgCheck / 70),
      "CSI": CSI,
      "Checks Count": checksCount,
      "Revenue Net Prev": Math.round(Math.round(weeklyRevenue * 0.9) * Math.random() * 2),
      "Avg Check Per Guest Prev": Math.round(Math.round(avgCheck / 3) * Math.random() * 2),
      "Income Accumulated Prev": Math.round(accumulatedIncome * Math.random() * 2),
      "Profit Gross Per M² Prev": Math.round(Math.round(weeklyProfit / 70) * Math.random() * 2),
      "Revenue Gross Prev": Math.round(weeklyRevenue * Math.random() * 2),
      "Profit Prev": Math.round(weeklyProfit * Math.random() * 2),
      "Expense Per Seat Prev": Math.round(Math.round(weeklyExpense / 70) * Math.random() * 2),
      "Revenue Net Accumulated Prev": Math.round(Math.round(accumulatedRevenue * 0.9) * Math.random() * 2),
      "Discount Loyalty Prev": Math.round(Math.round(avgCheck * 0.9) * Math.random() * 2),
      "Avg Check Per Hour Prev": Math.round(Math.round(avgCheck / 2) * Math.random() * 2),
      "Avg Check Per Table Prev": Math.round(Math.round(avgCheck / 70) * Math.random() * 2),
      "CSI Prev": Math.round(CSI * Math.random() * 2),
      "Checks Count Prev": Math.round(checksCount * Math.random() * 2),
    };
  });
};

export const generateBadMonthlyData = (startYear: number, startMonth: number, endYear: number, endMonth: number) => {
  const months = generateMonths(startYear, startMonth, endYear, endMonth);

  let accumulatedAvgCheck = 0;
  let accumulatedChecksCount = 0;
  let accumulatedIncome = 0;
  let accumulatedExpense = 0;
  let accumulatedRevenue = 0;
  let accumulatedProfit = 0;

  return months.map(({ name }) => {
    const checksCount = Math.round(Math.random() * 100);
    const avgCheck = Math.round(Math.random() * 10000);
    const weeklyIncome = avgCheck * checksCount;
    const weeklyExpense = Math.round(Math.random() * 50000); // расходы делаю поменьше
    const weeklyRevenue = Math.abs(weeklyIncome - weeklyExpense);
    const weeklyProfit = Math.abs(Math.round(weeklyRevenue - weeklyExpense * 0.2));  // понижающий коэффициент, типа НДС 20%
    const CSI = Math.round((Math.random() * 10) / 2);

    accumulatedChecksCount += checksCount;
    accumulatedAvgCheck += avgCheck;
    accumulatedIncome += weeklyIncome;
    accumulatedExpense += weeklyExpense;
    accumulatedRevenue += weeklyRevenue;
    accumulatedProfit += weeklyProfit;

    return {
      name,
      "Revenue Net": weeklyRevenue > 20000 ? Math.round(weeklyRevenue * 0.9) : undefined,
      "Avg Check Per Guest": avgCheck > 200 ? Math.round(avgCheck / 3) : undefined, 
      "Income Accumulated": weeklyIncome > 20000 ? accumulatedIncome : undefined,
      "Profit Gross Per M²": weeklyRevenue > 20000 ? Math.round(weeklyProfit / 70) : undefined,
      "Revenue Gross": weeklyRevenue > 20000 ? weeklyRevenue : undefined,
      "Profit": weeklyRevenue > 20000 ? weeklyProfit : undefined,
      "Expense Per Seat": weeklyExpense > 2000 ? Math.round(weeklyExpense / 70) : undefined,
      "Revenue Net Accumulated": weeklyRevenue > 20000 ? Math.round(accumulatedRevenue * 0.9) : undefined,
      "Discount Loyalty": avgCheck > 200 ? Math.round(avgCheck * 0.9) : undefined,
      "Avg Check Per Hour": avgCheck > 200 ? Math.round(avgCheck / 2) : undefined,
      "Avg Check Per Table": avgCheck > 200 ? Math.round(avgCheck / 70) : undefined,
      "CSI": CSI > 2 ? CSI : undefined,
      "Checks Count": checksCount > 2 ? checksCount : undefined,
      "Revenue Net Prev": weeklyRevenue > 20000 ? Math.round(Math.round(weeklyRevenue * 0.9) * Math.random() * 2) : undefined,
      "Avg Check Per Guest Prev": avgCheck > 200 ?Math.round( Math.round(avgCheck / 3) * Math.random() * 2) : undefined,
      "Income Accumulated Prev": weeklyIncome > 20000 ? Math.round(accumulatedIncome * Math.random() * 2) : undefined,
      "Profit Gross Per M² Prev": weeklyRevenue > 20000 ? Math.round(Math.round(weeklyProfit / 70) * Math.random() * 2) : undefined,
      "Revenue Gross Prev": weeklyRevenue > 20000 ? Math.round(weeklyRevenue * Math.random() * 2) : undefined,
      "Profit Prev": weeklyRevenue > 20000 ? Math.round(weeklyProfit * Math.random() * 2) : undefined,
      "Expense Per Seat Prev": weeklyExpense > 2000 ? Math.round(Math.round(weeklyExpense / 70) * Math.random() * 2) : undefined,
      "Revenue Net Accumulated Prev": weeklyRevenue > 20000 ? Math.round(Math.round(accumulatedRevenue * 0.9) * Math.random() * 2) : undefined,
      "Discount Loyalty Prev": avgCheck > 200 ? Math.round(Math.round(avgCheck * 0.9) * Math.random() * 2) : undefined,
      "Avg Check Per Hour Prev": avgCheck > 200 ? Math.round(Math.round(avgCheck / 2) * Math.random() * 2) : undefined,
      "Avg Check Per Table Prev": avgCheck > 200 ? Math.round(Math.round(avgCheck / 70) * Math.random() * 2) : undefined,
      "CSI Prev": CSI > 2 ? Math.round(CSI * Math.random() * 2) : undefined,
      "Checks Count Prev": checksCount > 2 ? Math.round(checksCount * Math.random() * 2) : undefined,
    };
  });
};

export const chartDataConfig = [
  { 
    key: "hasRevenueNet", 
    dataKey: "Revenue Net", 
    color: "#FF8B1F",
    isAccumulated: false, 
    yAxisId: "left",
  },
  {
    key: "hasAvgCheckPerGuest",
    dataKey: "Avg Check Per Guest",
    color: "#04E762",
    isAccumulated: false,
    yAxisId: "left",
  },
  {
    key: "hasIncomeAccumulated",
    dataKey: "Income Accumulated",
    color: "#3370FF",
    isAccumulated: true,
    yAxisId: "left",
  },
  {
    key: "hasProfitGrossPerM2",
    dataKey: "Profit Gross Per M²",
    color: "#9DFF6F",
    isAccumulated: false,
    yAxisId: "left",
  },
  { 
    key: "hasRevenueGross", 
    dataKey: "Revenue Gross", 
    color: "#FF2C47",
    isAccumulated: false, 
    yAxisId: "left",
  },
  { 
    key: "hasProfit", 
    dataKey: "Profit", 
    color: "#B15DE8",
    isAccumulated: false, 
    yAxisId: "left",
  },
  { 
    key: "hasExpensePerSeat", 
    dataKey: "Expense Per Seat", 
    color: "#FFBE99",
    isAccumulated: false,
    yAxisId: "left", 
  },
  {
    key: "hasRevenueNetAccumulated",
    dataKey: "Revenue Net Accumulated",
    color: "#DABFFF",
    isAccumulated: true,
    yAxisId: "left",
  },
  { 
    key: "hasDiscountLoyalty", 
    dataKey: "Discount Loyalty", 
    color: "#FFF047",
    isAccumulated: false,
    yAxisId: "left", 
  },
  {
    key: "hasAvgCheckPerHour",
    dataKey: "Avg Check Per Hour",
    color: "#DCD8D3",
    isAccumulated: false,
    yAxisId: "left",
  },
  {
    key: "hasAvgCheckPerTable",
    dataKey: "Avg Check Per Table",
    color: "#FF8ADE",
    isAccumulated: false,
    yAxisId: "left",
  },
  {
    key: "hasChecksCount",
    dataKey: "Checks Count",
    color: "#63C7FF",
    isAccumulated: false,
    yAxisId: "right",
  },
];