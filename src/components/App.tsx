import { useState } from "react";
import * as styles from "./App.module.scss";

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  console.log(123123, styles);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome to my Webpack bundle</h1>
      <button onClick={increment} className={styles.count}>
        {count}
      </button>
    </div>
  );
}
