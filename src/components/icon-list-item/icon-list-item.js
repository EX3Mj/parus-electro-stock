import styles from "./icon-list-item.module.css";
import { Link } from "react-router-dom";

export default function IconListItem({ icon }) {
  return (
    <li className={styles.icon_list_item}>
      <Link to={`/${icon.name}`} className={styles.icon_list_item__link}>
        <div className={styles.icon_list_item__image_container}>
          <img
            className={styles.icon_list_item__img}
            src={`./icons/RGB/cobalt/SVG/ICONS_RGB_${icon.name}.svg`}
            alt={icon.name}
          />
        </div>
        <h4>{icon.name}</h4>
        <p>{icon.tags}</p>
      </Link>
    </li>
  );
}
