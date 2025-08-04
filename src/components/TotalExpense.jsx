import React from "react";
import { useExpense } from "../customHook/useExpense";

const TotalExpense = () => {
  const { totalSpent } = useExpense();
  return (
    <div className="bg-white z-10 shadow-md shadow-gray-400 rounded-lg py-2 my-5">
      <div className="text-center px-2">
        <span className="text-[12px] font-semibold text-gray-400">
          TOTAL SPENT THIS MONTH &nbsp;
        </span>
        <span className=" text-black text-lg">${totalSpent}</span>
      </div>
    </div>
  );
};

export default TotalExpense;
