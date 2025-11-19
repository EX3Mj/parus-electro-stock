import styles from "./logo-sign-page.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Loader } from "../../components/loader/loader";
import DownLoadLogoSpecialButton from "../../components/buttons/download-logo-special-button/download-logo-special-button";
import LogoSignDownloadSection from "../../components/logo-pages-components/logo-sign-section/logo-sign-section";

export default function LogoSignPage() {
  return (
    <main className={styles.main}>
      <div className={styles.logo_standart__text_container}>
        <h1>Значок логотипа</h1>
      </div>
      <div className={styles.logo_section}>
        <div className={styles.logo_section__img_contaner}>
          <LazyLoadImage
            src={`./logo/RGB/PNG/Parus_logo_RGB_sing_cobalt.png`}
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
        <h3>Скачать значок логотипа</h3>
        <div className={styles.download_section__wrappers}>
          <LogoSignDownloadSection />
          <div className={styles.scheme_section}>
            <h4>Дополнительные варианты</h4>
            <div className={styles.download_special_section}>
              <LazyLoadImage
                src={`./logo/RGB/PNG/Parus_logo_RGB_sing_cobalt_white.png`}
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
                  color1={`cobalt`}
                  color2={`white`}
                  format={`EPS`}
                  sign
                />
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`cobalt`}
                  color2={`white`}
                  format={`PNG`}
                  sign
                />
                <DownLoadLogoSpecialButton
                  scheme={`RGB`}
                  color1={`cobalt`}
                  color2={`white`}
                  format={`SVG`}
                  sign
                />
                <DownLoadLogoSpecialButton
                  scheme={`CMYK`}
                  color1={`white`}
                  color2={`cobalt`}
                  lang={`RUS`}
                  format={`EPS`}
                />
                <DownLoadLogoSpecialButton
                  scheme={`CMYK`}
                  color1={`white`}
                  color2={`cobalt`}
                  lang={`RUS`}
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
