import styles from "./logo-list.module.css";
import { Link } from "react-router-dom";

export default function CategoryItemLogo() {
  return (
    <li className={styles.category_logo_item}>
      <h3>Логотип</h3>
      <ul className={styles.category_logo_item__logo_list}>
        <li className={styles.logo_list_item}>
          <Link to={`/logo-standart`} className={styles.logo_list_item__link}>
            <div className={styles.logo_list_item__image_container}>
              <img
                className={styles.logo_list_item__img}
                src={`./logo/RGB/SVG/Parus_logo_RGB_cobalt_RUS.svg`}
                alt="Логотип Парус электро, стандартный"
              />
            </div>
            <h4>Стандартная версия RU/EN</h4>
          </Link>
        </li>
        <li className={styles.logo_list_item}>
          <Link to={`/logo-gorizont`} className={styles.logo_list_item__link}>
            <div className={styles.logo_list_item__image_container}>
              <img
                className={styles.logo_list_item__img}
                src={`./logo/RGB/SVG/Parus_logo_RGB_cobalt_gorizont_RUS.svg`}
                alt="Логотип Парус электро, горизонт"
              />
            </div>
            <h4>Горизонтальная версия RU/EN</h4>
          </Link>
        </li>
        <li className={styles.logo_list_item}>
          <Link to={`/logo-znak`} className={styles.logo_list_item__link}>
            <div className={styles.logo_list_item__image_container}>
              <img
                className={styles.logo_list_item__znak}
                src={`./logo/RGB/SVG/Parus_logo_RGB_sing_cobalt.svg`}
                alt="Значок Парус электро"
              />
            </div>
            <h4>Значок</h4>
          </Link>
        </li>
      </ul>
    </li>
  );
}
