import styles from "./download-button.module.css";
import { RGB_COLORS } from "../configs/colors.config";

export default function DownLoadButton({ format, color, name, scheme }) {
  const createLink = () => {
    return `./icons/${scheme.toUpperCase()}/${color}/${format.toUpperCase()}/ICONS_${scheme.toUpperCase()}_${name}.${format.toLowerCase()}`;
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = createLink();
    link.download = `ICONS_${scheme.toUpperCase()}_${name}.${format.toLowerCase()}`;
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
