import React from "react";
import Dashboard from "./pages/Dashboard.jsx";
import { ExpenseProvider } from "./context/ExpenseContext.jsx";
import { ChartProvider } from "./context/ChartContext.jsx";
import { MonthProvider } from "./context/MonthContext.jsx";

export default function App() {
  return (
    <MonthProvider>
      <ExpenseProvider>
        <ChartProvider>
          <Dashboard />
        </ChartProvider>
      </ExpenseProvider>
    </MonthProvider>
  );
}
