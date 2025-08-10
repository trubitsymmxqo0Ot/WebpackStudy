import * as styles from "./App.module.scss";
import Shop from "@/components/shop/Shop";

export default function App() {
  let isPlatform;
  if (__PLATFORM__ == "desktop") {
    isPlatform = (
      <div>
        this is <span className={styles.span}>shop</span> popup
      </div>
    );
  }
  if (__PLATFORM__ == "mobile") {
    isPlatform = (
      <div>
        this is some <span className={styles.span}>shop</span> admin panel
      </div>
    );
  }
  return (
    <>
      <div>{isPlatform}</div>
      <Shop />
    </>
  );
}
