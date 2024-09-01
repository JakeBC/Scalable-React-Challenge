import { useEffect, useState } from "react";
import { usePapaParse } from "react-papaparse";
import { UfoSighting } from "../types";
import { countBy } from "lodash";

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

/**
 * Returns prepared data for use in charts. Filters data by year if one is provided
 */
export const useChartData = (selectedYear?: number) => {
  const allUfoData = useUfoData();
  const ufoData = selectedYear
    ? allUfoData.filter(
        (item) => new Date(item.datetime).getFullYear() === selectedYear
      )
    : allUfoData;

  const byYear = Object.entries(
    countBy(allUfoData, (sighting) => new Date(sighting.datetime).getFullYear())
  ).map(([year, count]) => ({ year, count }));

  const byMonth = Object.entries(
    countBy(ufoData, (sighting) => new Date(sighting.datetime).getMonth())
  ).map(([month, count]) => {
    const date = new Date();
    date.setMonth(parseInt(month));
    return {
      month: date.toLocaleString("default", { month: "short" }),
      count,
    };
  });

  const byShape = Object.entries(countBy(ufoData, "shape"))
    .map(([shape, count]) => ({ shape, count }))
    .filter(
      ({ shape, count }) =>
        count > 10 && shape !== "null" && shape !== "undefined"
    );

  const byCountry = Object.entries(countBy(ufoData, "country"))
    .map(([country, count]) => ({ country, count }))
    .filter(({ country }) => country !== "undefined");

  return { byCountry, byShape, byMonth, byYear, ufoData };
};
