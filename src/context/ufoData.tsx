import { createContext, FC, ReactNode, useContext, useState } from "react";
import { UfoSighting } from "../types";
import { useChartData } from "../hooks/useUfoData";

type Props = {
  children: ReactNode;
};

type UfoContext = {
  ufoData: UfoSighting[];
  byShape: { shape: string; count: number }[];
  byCountry: { country: string; count: number }[];
  byMonth: { month: string; count: number }[];
  byYear: { year: string; count: number }[];
  selectedYear?: number;
  setSelectedYear: (selectedYear?: number) => void;
};

const initialContext: UfoContext = {
  ufoData: [],
  byShape: [],
  byCountry: [],
  byMonth: [],
  byYear: [],
  setSelectedYear: () => null,
};

const UfoDataContext = createContext<UfoContext>(initialContext);

export const UfoDataProvider: FC<Props> = ({ children }) => {
  const [selectedYear, setSelectedYear] = useState<number>();
  const chartData = useChartData(selectedYear);

  return (
    <UfoDataContext.Provider
      value={{ ...chartData, selectedYear, setSelectedYear }}
    >
      {children}
    </UfoDataContext.Provider>
  );
};

export const useUfoContext = () => useContext(UfoDataContext);
