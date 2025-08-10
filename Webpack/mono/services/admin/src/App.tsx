import { useState } from "react";
import * as styles from "./App.module.scss";
import Admin from "@/components/admin/Admin";

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
    isPlatform = (
      <div>
        this is some <span className={styles.span}>admin</span> popup
      </div>
    );
  }
  if (__PLATFORM__ == "mobile") {
    isPlatform = (
      <div>
        this is some admin panel for <span className={styles.span}>admin</span>
      </div>
    );
  }
  return (
    <>
      <div>{isPlatform}</div>
      <Admin />
    </>
  );
}
