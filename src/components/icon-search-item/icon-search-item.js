import { Link } from "react-router-dom";
import styles from "./icon-search-item.module.css";

export default function IconSearchItem({ icon }) {
  return (
    <li className={styles.icon_list_item}>
      <Link to={`/${icon.name}`} className={styles.icon_list_item__link}>
        <img
          className={styles.icon_list_item__img}
          src={`./icons/RGB/cobalt/SVG/ICONS_RGB_${icon.name}.svg`}
          alt={icon.name}
        />
      </Link>
    </li>
  );
}
