export const generateWeeklyData = (weeksCount: number, year = 2025) => {
    let accumulatedAvgCheck = 0;
    let accumulatedChecksCount = 0;
    let accumulatedIncome = 0;
    let accumulatedExpense = 0;
    let accumulatedRevenue = 0;
    let accumulatedProfit = 0;
  
    return Array.from({ length: weeksCount }, (_, i) => {
        const checksCount = Math.round(Math.random() * 100);
        const avgCheck = Math.round(Math.random() * 10000);
        const weeklyIncome = avgCheck * checksCount;
        const weeklyExpense = Math.round(Math.random() * 50000); // расходы делаю поменьше
        const weeklyRevenue = weeklyIncome - weeklyExpense
        const weeklyProfit = Math.round(weeklyRevenue - weeklyExpense * 0.2);  // понижающий коэффициент, типа НДС 20%
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
            "Profit Gross Per M²": Math.round(accumulatedProfit / 70),
            "Revenue Gross": weeklyRevenue,
            "Profit": weeklyProfit,
            "Expense Per Seat": Math.round(weeklyExpense / 70),
            "Revenue Net Accumulated": Math.round(accumulatedRevenue * 0.9),
            "Discount Loyalty": Math.round(avgCheck * 0.9),
            "Avg Check Per Hour": Math.round(avgCheck / 2),
            "Avg Check Per Table": Math.round(avgCheck / 70),
            "CSI": CSI,
            "Checks Count": checksCount,
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
      const avgCheck = Math.round(Math.random() * 10000);
      const weeklyIncome = avgCheck * checksCount;
      const weeklyExpense = Math.round(Math.random() * 50000); // расходы делаю поменьше
      const weeklyRevenue = weeklyIncome - weeklyExpense
      const weeklyProfit = Math.round(weeklyRevenue - weeklyExpense * 0.2);  // понижающий коэффициент, типа НДС 20%
      const CSI = Math.round((Math.random() * 10) / 2);
  
      accumulatedChecksCount += checksCount;
      accumulatedAvgCheck += avgCheck;
      accumulatedIncome += weeklyIncome;
      accumulatedExpense += weeklyExpense;
      accumulatedRevenue += weeklyRevenue;
      accumulatedProfit += weeklyProfit;
  
      return {
          name: `${i + 1} Week ${year}`,
          "Revenue Net": weeklyRevenue > 200000 ? Math.round(weeklyRevenue * 0.9) : undefined,
          "Avg Check Per Guest": avgCheck > 2000? Math.round(avgCheck / 3) : undefined, 
          "Income Accumulated": weeklyIncome > 200000 ? accumulatedIncome : undefined,
          "Profit Gross Per M²": weeklyRevenue > 200000 ? Math.round(accumulatedProfit / 70) : undefined,
          "Revenue Gross": weeklyRevenue > 200000 ? weeklyRevenue : undefined,
          "Profit": weeklyRevenue > 200000 ? weeklyProfit : undefined,
          "Expense Per Seat": weeklyExpense > 20000 ? Math.round(weeklyExpense / 70) : undefined,
          "Revenue Net Accumulated": weeklyRevenue > 200000 ? Math.round(accumulatedRevenue * 0.9) : undefined,
          "Discount Loyalty": avgCheck > 2000 ? Math.round(avgCheck * 0.9) : undefined,
          "Avg Check Per Hour": avgCheck > 2000 ? Math.round(avgCheck / 2) : undefined,
          "Avg Check Per Table": avgCheck > 2000 ? Math.round(avgCheck / 70) : undefined,
          "CSI": CSI > 2 ? CSI : undefined,
          "Checks Count": checksCount > 2 ? checksCount : undefined,
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
    const avgCheck = Math.round(Math.random() * 10000);
    const weeklyIncome = avgCheck * checksCount;
    const weeklyExpense = Math.round(Math.random() * 50000); // расходы делаю поменьше
    const weeklyRevenue = weeklyIncome - weeklyExpense
    const weeklyProfit = Math.round(weeklyRevenue - weeklyExpense * 0.2);  // понижающий коэффициент, типа НДС 20%
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
      "Profit Gross Per M²": Math.round(accumulatedProfit / 70),
      "Revenue Gross": weeklyRevenue,
      "Profit": weeklyProfit,
      "Expense Per Seat": Math.round(weeklyExpense / 70),
      "Revenue Net Accumulated": Math.round(accumulatedRevenue * 0.9),
      "Discount Loyalty": Math.round(avgCheck * 0.9),
      "Avg Check Per Hour": Math.round(avgCheck / 2),
      "Avg Check Per Table": Math.round(avgCheck / 70),
      "CSI": CSI,
      "Checks Count": checksCount,
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
    const avgCheck = Math.round(Math.random() * 100000);
    const weeklyIncome = avgCheck * checksCount;
    const weeklyExpense = Math.round(Math.random() * 500000); // расходы делаю поменьше
    const weeklyRevenue = weeklyIncome - weeklyExpense
    const weeklyProfit = Math.round(weeklyRevenue - weeklyExpense * 0.2);  // понижающий коэффициент, типа НДС 20%
    const CSI = Math.round((Math.random() * 10) / 2);

    accumulatedChecksCount += checksCount;
    accumulatedAvgCheck += avgCheck;
    accumulatedIncome += weeklyIncome;
    accumulatedExpense += weeklyExpense;
    accumulatedRevenue += weeklyRevenue;
    accumulatedProfit += weeklyProfit;

    return {
      name,
      "Revenue Net": weeklyRevenue > 2000000 ? Math.round(weeklyRevenue * 0.9) : undefined,
      "Avg Check Per Guest": avgCheck > 2000? Math.round(avgCheck / 3) : undefined, 
      "Income Accumulated": weeklyIncome > 2000000 ? accumulatedIncome : undefined,
      "Profit Gross Per M²": weeklyRevenue > 2000000 ? Math.round(accumulatedProfit / 70) : undefined,
      "Revenue Gross": weeklyRevenue > 2000000 ? weeklyRevenue : undefined,
      "Profit": weeklyRevenue > 2000000 ? weeklyProfit : undefined,
      "Expense Per Seat": weeklyExpense > 20000 ? Math.round(weeklyExpense / 70) : undefined,
      "Revenue Net Accumulated": weeklyRevenue > 2000000 ? Math.round(accumulatedRevenue * 0.9) : undefined,
      "Discount Loyalty": avgCheck > 2000 ? Math.round(avgCheck * 0.9) : undefined,
      "Avg Check Per Hour": avgCheck > 2000 ? Math.round(avgCheck / 2) : undefined,
      "Avg Check Per Table": avgCheck > 2000 ? Math.round(avgCheck / 70) : undefined,
      "CSI": CSI > 2 ? CSI : undefined,
      "Checks Count": checksCount > 2 ? checksCount : undefined,
    };
  });
};