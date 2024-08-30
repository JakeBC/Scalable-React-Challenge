import { createContext, FC, ReactNode, useContext } from "react";
import { groupBy } from "lodash";
import { UfoSighting } from "../types";
import { useUfoData } from "../hooks/useUfoData";

type Props = {
  children: ReactNode;
};

type UfoContext = {
  sightings: UfoSighting[];
  byShape: { [shape: string]: UfoSighting[] };
};

const initialContext: UfoContext = {
  sightings: [],
  byShape: {},
};

const UfoDataContext = createContext<UfoContext>(initialContext);

export const UfoDataProvider: FC<Props> = ({ children }) => {
  const sightings = useUfoData();
  const byShape = groupBy(sightings, "shape");
  const ufoData: UfoContext = { sightings, byShape };

  return (
    <UfoDataContext.Provider value={ufoData}>
      {children}
    </UfoDataContext.Provider>
  );
};

export const useUfoContext = () => useContext(UfoDataContext);
