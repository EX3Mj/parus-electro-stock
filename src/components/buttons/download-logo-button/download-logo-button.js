import styles from "./download-logo-button.module.css";
import { RGB_COLORS } from "../../../configs/colors.config";

export default function DownLoadLogoButton({ format, color, scheme, lang, direction, sign }) {

  const directionSuffix = direction === `gorizont` ? '_gorizont' : '';
  const langSuffix = lang ? `_${lang}` : "";
  const signSuffix = sign ? `_sing` : ""

  const createLink = () => {
    return `./logo/${scheme.toUpperCase()}/${format.toUpperCase()}/Parus_logo_${scheme.toUpperCase()}${signSuffix}_${color}${directionSuffix}${langSuffix.toUpperCase()}.${format.toLowerCase()}`;
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = createLink();
    link.download = `Parus_logo_${scheme.toUpperCase()}${signSuffix}_${color}${directionSuffix}${langSuffix.toUpperCase()}.${format.toLowerCase()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className={styles.download_button}>
      <div
        className={styles.color_present}
        style={{ backgroundColor: RGB_COLORS[color] }}
      ></div>
      <span className={styles.download_button__text}>
        {format.toUpperCase()}
      </span>
    </button>
  );
}
