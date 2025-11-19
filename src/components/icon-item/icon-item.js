import styles from "./icon-item.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Loader } from "../loader/loader";
import DownloadIconButton from "../buttons/download-icon-button/download-icon-button";

export default function IconItem({ icon }) {

  return (
    <div className={styles.icon_item}>      
      <div className={styles.icon_list_item__image_container}>
        <LazyLoadImage
          src={`./icons/RGB/cobalt/PNG/ICONS_RGB_${icon.name}.png`}
          alt={icon.name}          
          effect="blur"
          width="100%"
          height="100%"
          style={{
            objectFit: "contain",
          }}
          placeholder={<Loader />}
        />
      </div>      
      <div className={styles.icon_item__download_section}>
        <h2>Скачать иконку</h2>
        <div className={styles.scheme_section}>
          <h3>Цветовая схема: RGB</h3>
          <h4>Цвет кобальт</h4>
          <div className={styles.icon_item__button_container}>
          <DownloadIconButton scheme={`RGB`} color={`cobalt`} format={`EPS`} name={icon.name}/>
          <DownloadIconButton scheme={`RGB`} color={`cobalt`} format={`PNG`} name={icon.name}/>
          <DownloadIconButton scheme={`RGB`} color={`cobalt`} format={`SVG`} name={icon.name}/>
          </div>
          <h4>Цвет графит</h4>
          <div className={styles.icon_item__button_container}>
          <DownloadIconButton scheme={`RGB`} color={`grafit`} format={`EPS`} name={icon.name}/>
          <DownloadIconButton scheme={`RGB`} color={`grafit`} format={`PNG`} name={icon.name}/>
          <DownloadIconButton scheme={`RGB`} color={`grafit`} format={`SVG`} name={icon.name}/>
          </div>
          <h4>Цвет белый</h4>
          <div className={styles.icon_item__button_container}>
          <DownloadIconButton scheme={`RGB`} color={`white`} format={`EPS`} name={icon.name}/>
          <DownloadIconButton scheme={`RGB`} color={`white`} format={`PNG`} name={icon.name}/>
          <DownloadIconButton scheme={`RGB`} color={`white`} format={`SVG`} name={icon.name}/>
          </div>
        </div>
        <div className={styles.scheme_section}>
          <h3>Цветовая схема: CMYK</h3>
          <span className={styles.cmyk_comment}>Файлы CMYK использовать только для печатных материалов. Для презентаций, электронных писем, веб-сайтов и другого цифрового контента использовать файлы с цветовой схемой RGB</span>
          <h4>Цвет кобальт</h4>
          <div className={styles.icon_item__button_container}>
          <DownloadIconButton scheme={`CMYK`} color={`cobalt`} format={`EPS`} name={icon.name}/>
          <DownloadIconButton scheme={`CMYK`} color={`cobalt`} format={`SVG`} name={icon.name}/>
          </div>
          <h4>Цвет графит</h4>
          <div className={styles.icon_item__button_container}>
          <DownloadIconButton scheme={`CMYK`} color={`grafit`} format={`EPS`} name={icon.name}/>
          <DownloadIconButton scheme={`CMYK`} color={`grafit`} format={`SVG`} name={icon.name}/>
          </div>
          <h4>Цвет белый</h4>
          <div className={styles.icon_item__button_container}>
          <DownloadIconButton scheme={`CMYK`} color={`white`} format={`EPS`} name={icon.name}/>
          <DownloadIconButton scheme={`CMYK`} color={`white`} format={`SVG`} name={icon.name}/>
          </div>
        </div>
      </div>
    </div>
  );
}
