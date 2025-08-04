import React from "react";
import MonthlyTransactions from "../components/MonthlyTransactions";
import ExpenseChart from "../components/ExpenseChart";
import TotalExpense from "../components/TotalExpense";
import SelectedMonth from "../components/SelectedMonth";

const Dashboard = () => {
  return (
    <div className="bg-purple-50 h-full p-10 lg:h-screen">
      <div className="flex">
        <div className="left text-xs text-gray-400">BUDGET DASHBOARD</div>
        <SelectedMonth />
      </div>
      <TotalExpense />
      <div className="lg:flex my-2">
        <ExpenseChart />
        <MonthlyTransactions />
      </div>
    </div>
  );
};

export default Dashboard;
