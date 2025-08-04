import { useState, createContext } from "react";
import data from "../data/transactions.json";
import useMonth from "../customHook/useMonth";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const { startDate, endDate } = useMonth();

  const monthlyData = data.filter(
    (item) =>
      new Date(item.date) > new Date(startDate) &&
      new Date(item.date) < new Date(endDate)
  );

  let spentsArr = [];
  monthlyData.forEach((i) => spentsArr.push(i.amount));
  const totalSpent = spentsArr
    .reduce((sum, currentValue) => sum + currentValue, 0)
    .toFixed(2);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(monthlyData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const monthlyDataPerPage = monthlyData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <ExpenseContext.Provider
      value={{
        result: monthlyDataPerPage,
        currentPage,
        setCurrentPage,
        totalPages,
        totalSpent,
        monthlyData,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
