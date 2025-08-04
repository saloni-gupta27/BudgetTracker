import React from "react";
import { format } from "date-fns";
import useMonth from "../customHook/useMonth";

const SelectedMonth = () => {
  const { changeToPrevMonth, changeToNextMonth, period } = useMonth();
  return (
    <div className="w-2/3 text-center justify-center text-blue-900">
      <span className="text-xs" onClick={changeToPrevMonth}>
        &lt;&lt;{" "}
      </span>
      <span className="font-bold px-2 align-middle">
        {" "}
        {format(period, "MMMM yyyy")}{" "}
      </span>
      <span className="text-xs" onClick={changeToNextMonth}>
        {" "}
        &gt;&gt;
      </span>
    </div>
  );
};

export default SelectedMonth;
