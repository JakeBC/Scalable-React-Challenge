import { UfoDataProvider } from "./context/ufoData";
import styles from "./App.module.scss";
import ChartGrid from "./components/chart-grid/ChartGrid";
import Header from "./components/header/Header";

function App() {
  return (
    <UfoDataProvider>
      <div className={styles.container}>
        <div className={styles.main}>
          <Header />
          <ChartGrid />
        </div>
      </div>
    </UfoDataProvider>
  );
}

export default App;
