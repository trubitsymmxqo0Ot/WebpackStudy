import { Link } from "react-router-dom";
import * as styles from "./Shop.module.scss";
import images from "@/assets/images.jpg";
export default function Shop() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Shop</div>
      <img src={images} alt="this is an image" className={styles.image} />
      <Link to="/" className={styles.link}>
        Back
      </Link>
    </div>
  );
}
