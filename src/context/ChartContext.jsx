import { Children } from "react";
import { createContext } from "react";
import { useExpense } from "../customHook/useExpense";

export const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const { monthlyData } = useExpense();
  const aggregated = monthlyData.reduce((acc, tx) => {
    acc[tx.category] = (acc[tx.category] || 0) + tx.amount;
    return acc;
  }, {});

  const chartData = [
    ["Category", "Spend"],
    ...Object.entries(aggregated).map(([cat, val]) => [cat, val]),
  ];
  return (
    <ChartContext.Provider value={{ chartData }}>
      {children}
    </ChartContext.Provider>
  );
};
