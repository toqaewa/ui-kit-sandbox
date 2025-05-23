export const generateRealisticData = (weeksCount: number, year = 2025) => {
    let accumulatedAvgCheck = 0;
    let accumulatedChecksCount = 0;
    let accumulatedIncome = 0;
    let accumulatedExpense = 0;
    let accumulatedRevenue = 0;
    let accumulatedProfit = 0;
  
    return Array.from({ length: weeksCount }, (_, i) => {
        const checksCount = Math.round(Math.random() * 100);
        const avgCheck = Math.round(Math.random() * 100000);
        const weeklyIncome = avgCheck * checksCount;
        const weeklyExpense = Math.round(Math.random() * 500000); // расходы делаю поменьше
        const weeklyRevenue = weeklyIncome - weeklyExpense
        const weeklyProfit = weeklyRevenue - weeklyExpense * 0.2;  // понижающий коэффициент, типа НДС 20%
    
        accumulatedChecksCount += checksCount;
        accumulatedAvgCheck += avgCheck;
        accumulatedIncome += weeklyIncome;
        accumulatedExpense += weeklyExpense;
        accumulatedRevenue += weeklyRevenue;
        accumulatedProfit += weeklyProfit;
    
        return {
            name: `${i + 1} Week ${year}`,
            expense: accumulatedExpense,
            revenue: accumulatedRevenue,
            "Revenue Net": weeklyRevenue * 0.9,
            "Avg Check Per Guest": undefined, 
            "Income Accumulated": accumulatedIncome,
            "Profit Gross Per M²": accumulatedProfit / 70,
            "Revenue Gross": weeklyRevenue,
            "Profit": weeklyProfit,
            "Expense Per Seat": weeklyExpense / 70,
            "Revenue Net Accumulated": accumulatedRevenue * 0.9,
            "Discount Loyalty": undefined,
            "Avg Check Per Hour": undefined,
            "Avg Check Per Table": undefined,
            "Table Occupancy Rate": undefined,
            "CSI": undefined,
            "Checks Count": undefined,
        };
    });
};

export const generateBadAccumulatedData = (weeksCount: number, year = 2025) => {
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

export const generateWeekData = (weeksCount: any, year = 2025) => {
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
  
  return months.map(({ name }) => ({
    name,
    "Revenue Net": Math.round(Math.random() * 10000),
    "Revenue Gross": Math.round(Math.random() * 8000),
    "Income": Math.round(Math.random() * 6000),
    "Avg Check Per Guest": Math.round(Math.random() * 4000),
    "Profit Gross Per M²": Math.round(Math.random() * 4000),
  }));
};


export const generateAccumulatedMonthlyData = (startYear: number, startMonth: number, endYear: number, endMonth: number) => {
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