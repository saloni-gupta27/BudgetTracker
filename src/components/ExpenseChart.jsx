import React from "react";
import { Chart } from "react-google-charts";
import useChart from "../customHook/useChart";

const ExpenseChart = () => {
  const { chartData } = useChart();
  return (
    <div className="w-full bg-white z-10 rounded-lg shadow-md shadow-gray-400 p-5 my-2 lg:w-1/3 lg:mr-5">
      <div className="text-[12px] font-semibold text-gray-400">
        EXPENSES BY CATEGORY
      </div>
      <div className="text-center justify-center align-middle">
        <Chart
          chartType="PieChart"
          data={chartData}
          width={"100%"}
          height={"400px"}
          options={{
            legend: {
              textStyle: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default ExpenseChart;
