import { useState } from "react";
import * as styles from "./App.module.scss";
import { Link } from "react-router-dom";
import Variables from "@/assets/icon.svg";
import Alien from "@/assets/alien.svg";
export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  console.log(123123, styles);
  return (
    <div className={styles.wrapper}>
      <div className={styles.links}>
        <Link className={styles.link} to="/shop">
          Shop
        </Link>
        <Link className={styles.link} to="/admin">
          Admin
        </Link>
      </div>
      <h1 className={styles.title}>Welcome to my Webpack bundle</h1>
      <Variables width={250} height={250} color={"red"} />
      <Alien width={250} height={250} color={"red"} />
      <button onClick={increment} className={styles.count}>
        {count}
      </button>
    </div>
  );
}
