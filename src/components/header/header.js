import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <header className={styles.header}>
      <img
        className={styles.header__logo}
        src="Parus_logo_RGB_cobalt_RUS.svg"
        alt="Логотип Парус электро"
        onClick={handleLogoClick}
      />
      <div className={styles.header__text_container}>
        <p className={styles.header__title}>Решения для будущего</p>
        <p className={styles.header__text}>
          При возникновении вопросов по использованию материалов просим
          обратиться в отдел маркетинга
        </p>
      </div>
    </header>
  );
}
