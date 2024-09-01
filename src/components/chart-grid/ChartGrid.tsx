import { FC } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useUfoContext } from "../../context/ufoData";
import { useColourList } from "../../hooks/useColourList";
import ChartWrapper from "../chart-wrapper/ChartWrapper";
import styles from "./ChartGrid.module.scss";

/**
 * Displays detailed charts for
 * - year
 * - shape
 * - country
 * - month
 * - location
 */
const ChartGrid: FC = () => {
  const { byShape, byCountry, byMonth, byYear, ufoData, setSelectedYear } =
    useUfoContext();
  const colours = useColourList();

  return (
    <div className={styles.container}>
      <ChartWrapper name="sightings by year">
        <LineChart data={byYear}>
          <XAxis dataKey="year" />
          <YAxis dataKey="count" scale="log" domain={["auto", "auto"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke={colours[8]}
            strokeWidth={2}
            activeDot={{
              onClick: (_, event: any) =>
                setSelectedYear(parseInt(event.payload.year)),
              style: { cursor: "pointer" },
            }}
          />
        </LineChart>
      </ChartWrapper>
      <ChartWrapper name="sightings by ufo shape">
        <BarChart width={730} height={250} data={byShape}>
          <XAxis dataKey="shape" tickSize={undefined} />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill={colours[2]} />
        </BarChart>
      </ChartWrapper>
      <ChartWrapper name="sightings by country">
        <PieChart>
          <Pie
            nameKey="country"
            dataKey="count"
            data={byCountry}
            outerRadius={100}
          >
            {byCountry.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colours[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ChartWrapper>
      <ChartWrapper name="sightings per month">
        <AreaChart data={byMonth}>
          <Area type="monotone" dataKey="count" fill={colours[3]} />
          <XAxis dataKey="month" />
          <YAxis dataKey="count" />
          <Tooltip />
        </AreaChart>
      </ChartWrapper>
      <ChartWrapper name="sighting locations">
        <ScatterChart className={styles.worldMap}>
          <Scatter
            name="location"
            data={ufoData.slice(0, 1000)}
            fill={colours[1]}
          />
          <XAxis dataKey="longitude" type="number" domain={[-180, 180]} />
          <YAxis dataKey="latitude" type="number" domain={[-180, 180]} />
          <Tooltip />
        </ScatterChart>
      </ChartWrapper>
    </div>
  );
};

export default ChartGrid;
