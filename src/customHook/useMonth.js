import { useContext } from "react";
import { MonthContext } from "../context/MonthContext";

const useMonth = () => {
  const context = useContext(MonthContext);
  return context;
};

export default useMonth;
