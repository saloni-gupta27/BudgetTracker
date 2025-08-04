import React from "react";
import { useExpense } from "../customHook/useExpense";

const MonthlyTransactions = () => {
  const { result, totalPages, currentPage, setCurrentPage } = useExpense();
  const generatePageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex-1 bg-white z-10 rounded-lg p-5 shadow-md shadow-gray-400 lg:my-2">
      <div className="text-[12px] font-semibold text-gray-400">
        TRANSACTION THIS MONTH
      </div>
      <div className="border border-gray-200 my-3">
        <div className="grid grid-cols-4  p-3 text-md text-blue-900 font-semibold  bg-gray-100 wrap-break-word">
          <div>PAYEE</div>
          <div>DATE</div>
          <div>AMOUNT</div>
          <div>CATEGORY</div>
        </div>
        {result?.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-4 p-3 gap-2 text-sm text-black font-semibold border border-gray-200 wrap-break-word"
          >
            <div>{item.payee}</div>
            <div>{item.date}</div>
            <div>${item.amount}</div>
            <div>{item.category}</div>
          </div>
        ))}
        <div className="flex p-3 text-sm text-black font-bold justify-center">
          {generatePageNumbers.map((pageNum) => (
            <button
              className={`flex mx-2 ${
                pageNum === currentPage ? "no-underline" : "underline"
              } `}
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
            >
              {" "}
              {pageNum}{" "}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthlyTransactions;
