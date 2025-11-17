import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
    <footer className={styles.footer}>      
      <div className={styles.footer__text_container}>
        <a href="mailto:marketing@parus-electro.ru">marketing@parus-electro.ru</a>
      </div>    
      <img
        className={styles.footer__logo}
        src="Parus_logo_RGB_white_RUS.svg"
        alt="Логотип Парус электро"
      />  
    </footer>
    </>
  );
}
