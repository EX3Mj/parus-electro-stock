import styles from "./logo-gorizont-page.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Loader } from "../../components/loader/loader";
import LogoDownloadSectionRu from "../../components/logo-pages-components/logo-ru-section/logo-ru-section";
import DownLoadLogoSpecialButton from "../../components/buttons/download-logo-special-button/download-logo-special-button";
import LogoDownloadSectionEn from "../../components/logo-pages-components/logo-en-section/logo-en-section";

export default function LogoGorizontPage() {
  return (
    <main className={styles.main}>
      <div className={styles.logo_standart__text_container}>
        <h1>Горизонтальный логотип</h1>
      </div>
      <div className={styles.logo_section}>
        <h2>Ру версия</h2>
        <div className={styles.logo_section__img_contaner}>
          <LazyLoadImage
            src={`./logo/RGB/PNG/Parus_logo_RGB_cobalt_gorizont_RUS.png`}
            alt="Логотип РУ"
            effect="blur"
            width="100%"
            height="100%"
            style={{
              objectFit: "contain",
            }}
            placeholder={<Loader />}
          />
        </div>
        <h3>Скачать РУ-версию логотипа</h3>
        <div className={styles.download_section__wrappers}>
          <LogoDownloadSectionRu gorizont />
          <div className={styles.scheme_section}>
            <h4>Дополнительные варианты</h4>
            <div className={styles.download_special_section}>
              <LazyLoadImage
                src={`./logo/RGB/PNG/Parus_logo_RGB_white_cobalt_black_gorizont_RUS.png`}
                alt="Логотип РУ"
                effect="blur"
                width={150}
                height={100}
                style={{
                  objectFit: "contain",
                }}
                placeholder={<Loader />}
              />
              <div className={styles.download_special_section__buttons_wrapper}>
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`black`}
                  lang={`RUS`}
                  format={`EPS`}
                  direction={`gorizont`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`black`}
                  lang={`RUS`}
                  format={`PNG`}
                  direction={`gorizont`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`black`}
                  lang={`RUS`}
                  format={`SVG`}
                  direction={`gorizont`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`CMYK`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`black`}
                  lang={`RUS`}
                  format={`EPS`}
                  direction={`gorizont`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`CMYK`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`black`}
                  lang={`RUS`}
                  format={`SVG`}
                  direction={`gorizont`}
                />
              </div>
            </div>
            <div className={styles.download_special_section}>
              <LazyLoadImage
                src={`./logo/RGB/PNG/Parus_logo_RGB_white_cobalt_graphite_gorizont_RUS.png`}
                alt="Логотип РУ"
                effect="blur"
                width={150}
                height={100}
                style={{
                  objectFit: "contain",
                }}
                placeholder={<Loader />}
              />
              <div className={styles.download_special_section__buttons_wrapper}>
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`graphite`}
                  lang={`RUS`}
                  format={`EPS`}
                  direction={`gorizont`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`graphite`}
                  lang={`RUS`}
                  format={`PNG`}
                  direction={`gorizont`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`graphite`}
                  lang={`RUS`}
                  format={`SVG`}
                  direction={`gorizont`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`CMYK`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`graphite`}
                  lang={`RUS`}
                  format={`EPS`}
                  direction={`gorizont`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`CMYK`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`graphite`}
                  lang={`RUS`}
                  format={`SVG`}
                  direction={`gorizont`}
                />
              </div>
            </div>
            <div className={styles.download_special_section}>
              <LazyLoadImage
                src={`./logo/RGB/PNG/Parus_logo_RGB_white_cobalt_gorizont_RUS.png`}
                alt="Логотип РУ"
                effect="blur"
                width={150}
                height={100}
                style={{
                  objectFit: "contain",
                }}
                placeholder={<Loader />}
              />
              <div className={styles.download_special_section__buttons_wrapper}>
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  lang={`RUS`}
                  format={`EPS`}
                  direction={`gorizont`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  lang={`RUS`}
                  format={`PNG`}
                  direction={`gorizont`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  lang={`RUS`}
                  format={`SVG`}
                  direction={`gorizont`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`CMYK`}
                  color1={`white`}
                  color2={`cobalt`}
                  lang={`RUS`}
                  format={`EPS`}
                  direction={`gorizont`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`CMYK`}
                  color1={`white`}
                  color2={`cobalt`}
                  lang={`RUS`}
                  format={`SVG`}
                  direction={`gorizont`}
                />                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.logo_section}>
        <h2>En версия</h2>
        <div className={styles.logo_section__img_contaner}>
          <LazyLoadImage
            src={`./logo/RGB/PNG/Parus_logo_RGB_cobalt_gorizont_ENG.png`}
            alt="Логотип En"
            effect="blur"
            width="100%"
            height="100%"
            style={{
              objectFit: "contain",
            }}
            placeholder={<Loader />}
          />
        </div>
        <h3>Скачать EN-версию логотипа</h3>
        <div className={styles.download_section__wrappers}>
          <LogoDownloadSectionEn gorizont />
          <div className={styles.scheme_section}>
            <h4>Дополнительные варианты</h4>
            <div className={styles.download_special_section}>
              <LazyLoadImage
                src={`./logo/RGB/PNG/Parus_logo_RGB_white_cobalt_black_ENG.png`}
                alt="Логотип РУ"
                effect="blur"
                width={150}
                height={100}
                style={{
                  objectFit: "contain",
                }}
                placeholder={<Loader />}
              />
              <div className={styles.download_special_section__buttons_wrapper}>
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`black`}
                  lang={`ENG`}
                  format={`EPS`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`black`}
                  lang={`ENG`}
                  format={`PNG`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`black`}
                  lang={`ENG`}
                  format={`SVG`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`CMYK`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`black`}
                  lang={`ENG`}
                  format={`EPS`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`CMYK`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`black`}
                  lang={`ENG`}
                  format={`SVG`}
                />                
              </div>
            </div>
            <div className={styles.download_special_section}>
              <LazyLoadImage
                src={`./logo/RGB/PNG/Parus_logo_RGB_white_cobalt_graphite_ENG.png`}
                alt="Логотип РУ"
                effect="blur"
                width={150}
                height={100}
                style={{
                  objectFit: "contain",
                }}
                placeholder={<Loader />}
              />
              <div className={styles.download_special_section__buttons_wrapper}>
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`graphite`}
                  lang={`ENG`}
                  format={`EPS`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`graphite`}
                  lang={`ENG`}
                  format={`PNG`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`graphite`}
                  lang={`ENG`}
                  format={`SVG`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`CMYK`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`graphite`}
                  lang={`ENG`}
                  format={`EPS`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`CMYK`}
                  color1={`white`}
                  color2={`cobalt`}
                  color3={`graphite`}
                  lang={`ENG`}
                  format={`SVG`}
                />                
              </div>
            </div>
            <div className={styles.download_special_section}>
              <LazyLoadImage
                src={`./logo/RGB/PNG/Parus_logo_RGB_white_cobalt_ENG.png`}
                alt="Логотип РУ"
                effect="blur"
                width={150}
                height={100}
                style={{
                  objectFit: "contain",
                }}
                placeholder={<Loader />}
              />
              <div className={styles.download_special_section__buttons_wrapper}>
                
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  lang={`ENG`}
                  format={`EPS`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  lang={`ENG`}
                  format={`PNG`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`white`}
                  color2={`cobalt`}
                  lang={`ENG`}
                  format={`SVG`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`CMYK`}
                  color1={`white`}
                  color2={`cobalt`}
                  lang={`ENG`}
                  format={`EPS`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`CMYK`}
                  color1={`white`}
                  color2={`cobalt`}
                  lang={`ENG`}
                  format={`SVG`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
