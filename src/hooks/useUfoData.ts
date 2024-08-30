import { useEffect, useState } from "react";
import { usePapaParse } from "react-papaparse";
import { UfoSighting } from "../types";

const UFO_DATA_PATH = `${process.env.PUBLIC_URL}/data/complete.csv`;

/**
 * fetch the ufo csv data from the supplied file
 */
const loadUfoData = async (): Promise<string> => {
  try {
    const response = await fetch(UFO_DATA_PATH);
    const csv = await response.text();
    return csv;
  } catch (error: any) {
    console.error("something went wrong with the ufo data!!");
    return "";
  }
};

/**
 * Returns an array of ufo sightings
 */
export const useUfoData = (): UfoSighting[] => {
  const [ufoData, setUfoData] = useState<UfoSighting[]>([]);
  const { readString } = usePapaParse();

  useEffect(() => {
    const getData = async () => {
      const data = await loadUfoData();
      readString<UfoSighting>(data, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          setUfoData(results.data);
        },
      });
    };
    getData();
  }, [readString]);

  return ufoData;
};
