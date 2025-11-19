import styles from "./logo-ru-section.module.css";
import DownLoadLogoButton from "../../buttons/download-logo-button/download-logo-button";

export default function LogoDownloadSectionRu( {gorizont} ) {
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
              lang={`RUS`}
              format={`EPS`}
              direction={gorizont ? `gorizont` : ``}
            />
            <DownLoadLogoButton
              color={`cobalt`}
              scheme={`RGB`}
              format={`PNG`}
              lang={`RUS`}
              direction={gorizont ? `gorizont` : ``}
            />
            <DownLoadLogoButton
              color={`cobalt`}
              scheme={`RGB`}
              format={`SVG`}
              lang={`RUS`}
              direction={gorizont ? `gorizont` : ``}
            />
          </div>
        </div>
        <div className={styles.download_section}>
          <h4>Цвет черный</h4>

          <div className={styles.download_section__button_container}>
            <DownLoadLogoButton
              color={`black`}
              scheme={`RGB`}
              lang={`RUS`}
              format={`EPS`}
              direction={gorizont ? `gorizont` : ``}
            />
            <DownLoadLogoButton
              color={`black`}
              scheme={`RGB`}
              format={`PNG`}
              lang={`RUS`}
              direction={gorizont ? `gorizont` : ``}
            />
            <DownLoadLogoButton
              color={`black`}
              scheme={`RGB`}
              format={`SVG`}
              lang={`RUS`}
              direction={gorizont ? `gorizont` : ``}
            />
          </div>
        </div>
        <div className={styles.download_section}>
          <h4>Цвет графит</h4>

          <div className={styles.download_section__button_container}>
            <DownLoadLogoButton
              color={`graphite`}
              scheme={`RGB`}
              lang={`RUS`}
              format={`EPS`}
              direction={gorizont ? `gorizont` : ``}
            />
            <DownLoadLogoButton
              color={`graphite`}
              scheme={`RGB`}
              format={`PNG`}
              lang={`RUS`}
              direction={gorizont ? `gorizont` : ``}
            />
            <DownLoadLogoButton
              color={`graphite`}
              scheme={`RGB`}
              format={`SVG`}
              lang={`RUS`}
              direction={gorizont ? `gorizont` : ``}
            />
          </div>
        </div>
        <div className={styles.download_section}>
          <h4>Цвет белый</h4>
          <div className={styles.download_section__button_container}>
            <DownLoadLogoButton
              color={`white`}
              scheme={`RGB`}
              lang={`RUS`}
              format={`EPS`}
              direction={gorizont ? `gorizont` : ``}
            />
            <DownLoadLogoButton
              color={`white`}
              scheme={`RGB`}
              format={`PNG`}
              lang={`RUS`}
              direction={gorizont ? `gorizont` : ``}
            />
            <DownLoadLogoButton
              color={`white`}
              scheme={`RGB`}
              format={`SVG`}
              lang={`RUS`}
              direction={gorizont ? `gorizont` : ``}
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
              lang={`RUS`}
              format={`EPS`}
              direction={gorizont ? `gorizont` : ``}
            />
            <DownLoadLogoButton
              color={`cobalt`}
              scheme={`CMYK`}
              format={`SVG`}
              lang={`RUS`}
              direction={gorizont ? `gorizont` : ``}
            />
          </div>
        </div>
        <div className={styles.download_section}>
          <h4>Цвет черный</h4>

          <div className={styles.download_section__button_container}>
            <DownLoadLogoButton
              color={`black`}
              scheme={`CMYK`}
              lang={`RUS`}
              format={`EPS`}
              direction={gorizont ? `gorizont` : ``}
            />
            <DownLoadLogoButton
              color={`black`}
              scheme={`CMYK`}
              format={`SVG`}
              lang={`RUS`}
              direction={gorizont ? `gorizont` : ``}
            />
          </div>
        </div>
        <div className={styles.download_section}>
          <h4>Цвет графит</h4>

          <div className={styles.download_section__button_container}>
            <DownLoadLogoButton
              color={`graphite`}
              scheme={`CMYK`}
              lang={`RUS`}
              format={`EPS`}
              direction={gorizont ? `gorizont` : ``}
            />
            <DownLoadLogoButton
              color={`graphite`}
              scheme={`CMYK`}
              format={`SVG`}
              lang={`RUS`}
              direction={gorizont ? `gorizont` : ``}
            />
          </div>
        </div>
        <div className={styles.download_section}>
          <h4>Цвет белый</h4>
          <div className={styles.download_section__button_container}>
            <DownLoadLogoButton
              color={`white`}
              scheme={`CMYK`}
              lang={`RUS`}
              format={`EPS`}
              direction={gorizont ? `gorizont` : ``}
            />
            <DownLoadLogoButton
              color={`white`}
              scheme={`CMYK`}
              format={`SVG`}
              lang={`RUS`}
              direction={gorizont ? `gorizont` : ``}
            />
          </div>
        </div>
      </div>
    </>
  );
}
