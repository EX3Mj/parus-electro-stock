import styles from "./download-logo-special-button.module.css";

export default function DownLoadLogoSpecialButton({ format, scheme, color1, color2, lang, direction, color3, sign }) {

  const directionSuffix = direction === `gorizont` ? '_gorizont' : '';
  const color2Suffix = color2 ? `_${color2}` : '';
  const color3Suffix = color3 ? `_${color3}` : '';
  const langSuffix = lang ? `_${lang}` : "";
  const signSuffix = sign ? `_sing` : ""

  const createLink = () => {
    return `./logo/${scheme.toUpperCase()}/${format.toUpperCase()}/Parus_logo_${scheme.toUpperCase()}${signSuffix}_${color1}${color2Suffix}${color3Suffix}${directionSuffix}${langSuffix.toUpperCase()}.${format.toLowerCase()}`;
  };

  const handleDownload = () => {
    console.log(createLink());
    const link = document.createElement("a");
    link.href = createLink();
    link.download = `Parus_logo_${scheme.toUpperCase()}${signSuffix}_${color1}${color2Suffix}${color3Suffix}${directionSuffix}${langSuffix.toUpperCase()}.${format.toLowerCase()}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className={styles.download_button}>      
      <p>
        {scheme.toUpperCase()}
      </p>
      <span>
        {format.toUpperCase()}
      </span>
    </button>
  );
}