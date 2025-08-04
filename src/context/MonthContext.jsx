import { createContext, useState, useEffect } from "react";
import { subMonths, addMonths, startOfMonth, endOfMonth } from "date-fns";

export const MonthContext = createContext();

export const MonthProvider = ({ children }) => {
  const [period, setPeriod] = useState(new Date(2024, 0, 1));
  const [startDate, setStartDate] = useState(startOfMonth(period));
  const [endDate, setEndDate] = useState(endOfMonth(period));

  // if above 2 lines not used
  // const startDate = useMemo(() => startOfMonth(period), [period]);
  // const endDate   = useMemo(() => endOfMonth(period), [period]);

  useEffect(() => {
    setStartDate(startOfMonth(period));
    setEndDate(endOfMonth(period));
  }, [period]);

  const changeToPrevMonth = () => {
    setPeriod((prev) => subMonths(prev, 1));
  };
  const changeToNextMonth = () => {
    setPeriod((prev) => addMonths(prev, 1));
  };
  return (
    <MonthContext.Provider
      value={{
        startDate,
        endDate,
        changeToPrevMonth,
        changeToNextMonth,
        period,
      }}
    >
      {children}
    </MonthContext.Provider>
  );
};
