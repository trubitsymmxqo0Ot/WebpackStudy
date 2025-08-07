import { Link } from "react-router-dom";
import * as styles from "./Shop.module.scss";
export default function Shop() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Shop</div>
      <Link to="/" className={styles.link}>
        Back
      </Link>
    </div>
  );
}
