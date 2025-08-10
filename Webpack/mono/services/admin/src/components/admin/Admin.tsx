import { Link } from "react-router-dom";
import * as styles from "./Admin.module.scss";
import picture from "@/assets/picture.png";

export default function Admin() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Admin</div>
      <img src={picture} alt="This is picture" className={styles.image} />
      <Link to="/" className={styles.link}>
        Back
      </Link>
    </div>
  );
}
