import { FC } from "react";
import { useUfoContext } from "../../context/ufoData";
import styles from "./Header.module.scss";

const Header: FC = () => {
  const { selectedYear, setSelectedYear } = useUfoContext();

  return (
    <header className={styles.container}>
      <h1>ufo data</h1>
      {selectedYear && (
        <>
          <b>({selectedYear})</b>
          <button
            type="button"
            className={styles.button}
            onClick={() => setSelectedYear()}
          >
            clear
          </button>
        </>
      )}
    </header>
  );
};

export default Header;
