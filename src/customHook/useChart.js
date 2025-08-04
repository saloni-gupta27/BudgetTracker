import React from "react";
import { useContext } from "react";
import { ChartContext } from "../context/ChartContext";

const useChart = () => {
  const context = useContext(ChartContext);
  return context;
};

export default useChart;
