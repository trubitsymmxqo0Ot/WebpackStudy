import { useState, useRef } from "react";
import * as styles from "./App.module.scss";
import { Link } from "react-router-dom";
import Alien from "@/assets/alien.svg";

function fun1() {
  fun2();
}
function fun2() {
  throw new Error();
}

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  let isPlatform;
  if (__PLATFORM__ == "desktop") {
    isPlatform = <div>this is some popup</div>;
  }
  if (__PLATFORM__ == "mobile") {
    isPlatform = <div>this is some admin panel</div>;
  }
  return (
    <div className={styles.wrapper} data-testid={"App.DataTestId"}>
      <div className={styles.links}>
        <Link
          className={styles.link}
          to="/shop"
          data-testid={"Platform.DataTestId"}
        >
          Shop
        </Link>
        <Link className={styles.link} to="/admin">
          Admin
        </Link>
      </div>
      <h2 className={styles.subtitle}>Platform: {isPlatform}</h2>
      <h1 className={styles.title}>Welcome to my Webpack bundle</h1>
      <Alien className={styles.img} />
      <button onClick={increment} className={styles.count}>
        {count}
      </button>
      <button className={styles.btn} onClick={() => fun1()}>
        Button
      </button>
    </div>
  );
}
