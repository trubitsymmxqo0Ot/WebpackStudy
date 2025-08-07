import { Link } from "react-router-dom";
import * as styles from "./Admin.module.scss";
export default function Admin() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Admin</div>
      <Link to="/" className={styles.link}>
        Back
      </Link>
    </div>
  );
}
