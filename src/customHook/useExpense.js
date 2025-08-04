import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext.jsx";

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  return context;
};
