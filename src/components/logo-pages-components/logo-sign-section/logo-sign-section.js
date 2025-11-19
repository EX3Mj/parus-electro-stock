import styles from "./logo-sign-section.module.css";
import DownLoadLogoButton from "../../buttons/download-logo-button/download-logo-button";

export default function LogoSignDownloadSection() {
  return (
    <>
      <div className={styles.scheme_section}>
        <h4>Цветовая схема RGB</h4>
        <div className={styles.download_section}>
          <h4>Цвет кобальт</h4>

          <div className={styles.download_section__button_container}>
            <DownLoadLogoButton
              color={`cobalt`}
              scheme={`RGB`}
              format={`EPS`}
              sign
            />
            <DownLoadLogoButton
              color={`cobalt`}
              scheme={`RGB`}
              format={`PNG`}
              sign
            />
            <DownLoadLogoButton
              color={`cobalt`}
              scheme={`RGB`}
              format={`SVG`}
              sign
            />
          </div>
        </div>
        <div className={styles.download_section}>
          <h4>Цвет черный</h4>

          <div className={styles.download_section__button_container}>
            <DownLoadLogoButton
              color={`black`}
              scheme={`RGB`}
              format={`EPS`}
              sign
            />
            <DownLoadLogoButton
              color={`black`}
              scheme={`RGB`}
              format={`PNG`}
              sign
            />
            <DownLoadLogoButton
              color={`black`}
              scheme={`RGB`}
              format={`SVG`}
              sign
            />
          </div>
        </div>
        <div className={styles.download_section}>
          <h4>Цвет графит</h4>

          <div className={styles.download_section__button_container}>
            <DownLoadLogoButton
              color={`graphite`}
              scheme={`RGB`}
              format={`EPS`}
              sign
            />
            <DownLoadLogoButton
              color={`graphite`}
              scheme={`RGB`}
              format={`PNG`}
              sign
            />
            <DownLoadLogoButton
              color={`graphite`}
              scheme={`RGB`}
              format={`SVG`}
              sign
            />
          </div>
        </div>
        <div className={styles.download_section}>
          <h4>Цвет белый</h4>
          <div className={styles.download_section__button_container}>
            <DownLoadLogoButton
              color={`white`}
              scheme={`RGB`}
              format={`EPS`}
              sign
            />
            <DownLoadLogoButton
              color={`white`}
              scheme={`RGB`}
              format={`PNG`}
              sign
            />
            <DownLoadLogoButton
              color={`white`}
              scheme={`RGB`}
              format={`SVG`}
              sign
            />
          </div>
        </div>
      </div>
      <div className={styles.scheme_section}>
        <h4>Цветовая схема CMYK</h4>
        <div className={styles.download_section}>
          <h4>Цвет кобальт</h4>

          <div className={styles.download_section__button_container}>
            <DownLoadLogoButton
              color={`cobalt`}
              scheme={`CMYK`}
              format={`EPS`}
              sign
            />
            <DownLoadLogoButton
              color={`cobalt`}
              scheme={`CMYK`}
              format={`SVG`}
              sign
            />
          </div>
        </div>
        <div className={styles.download_section}>
          <h4>Цвет черный</h4>

          <div className={styles.download_section__button_container}>
            <DownLoadLogoButton
              color={`black`}
              scheme={`CMYK`}
              format={`EPS`}
              sign
            />
            <DownLoadLogoButton
              color={`black`}
              scheme={`CMYK`}
              format={`SVG`}
              sign
            />
          </div>
        </div>
        <div className={styles.download_section}>
          <h4>Цвет графит</h4>

          <div className={styles.download_section__button_container}>
            <DownLoadLogoButton
              color={`graphite`}
              scheme={`CMYK`}
              format={`EPS`}
              sign
            />
            <DownLoadLogoButton
              color={`graphite`}
              scheme={`CMYK`}
              format={`SVG`}
              sign
            />
          </div>
        </div>
        <div className={styles.download_section}>
          <h4>Цвет белый</h4>
          <div className={styles.download_section__button_container}>
            <DownLoadLogoButton
              color={`white`}
              scheme={`CMYK`}
              format={`EPS`}
              sign
            />
            <DownLoadLogoButton
              color={`white`}
              scheme={`CMYK`}
              format={`SVG`}
              sign
            />
          </div>
        </div>
      </div>
    </>
  );
}
