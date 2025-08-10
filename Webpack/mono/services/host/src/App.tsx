import { useState } from "react";
import * as styles from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import Alien from "@/assets/alien.svg";
import { adminRoutes } from "@packages/shared/src/routes/admin";
import { shopRoutes } from "@packages/shared/src/routes/shop";

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
    <div className={styles.wrapper}>
      <div className={styles.links}>
        <Link className={styles.link} to={shopRoutes.index}>
          Shop
        </Link>
        <Link className={styles.link} to={adminRoutes.index}>
          Admin
        </Link>
      </div>
      <h2 className={styles.subtitle}>Platform: {isPlatform}</h2>
      <h1 className={styles.title}>Welcome to my Webpack bundle</h1>
      <Alien className={styles.img} />
      <button onClick={increment} className={styles.count}>
        {count}
      </button>
      <Outlet />
    </div>
  );
}
