import { useMemo } from "react";
import colours from "../styles/colours.module.scss";

export const useColourList = (): string[] => {
  return useMemo(() => Object.values(colours), []);
};
