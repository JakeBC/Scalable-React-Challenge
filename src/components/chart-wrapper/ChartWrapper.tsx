import { FC, ReactElement } from "react";
import { ResponsiveContainer } from "recharts";
import clsx from "clsx";
import styles from "./ChartWrapper.module.scss";

type Props = {
  name?: string;
  className?: string;
  children: ReactElement;
};

const ChartWrapper: FC<Props> = ({ name, className, children }) => (
  <div className={clsx(styles.container, className)}>
    <h2 className={styles.chartName}>{name}</h2>
    <ResponsiveContainer width="95%" height="80%">
      {children}
    </ResponsiveContainer>
  </div>
);
export default ChartWrapper;
