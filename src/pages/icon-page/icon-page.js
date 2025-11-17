import styles from "./icon-page.module.css";
import IconItem from "../../components/icon-item/icon-item";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/loader/loader";
import { DataContext } from "../../services/reducers/data-reducer";

export default function IconPage() {
  const { state } = useContext(DataContext);
  const params = useParams();

  const icon = state.data.find((item) => item.name === params.name);

  return (
    <main className={styles.main}>
      <div className={styles.icon_page__text_container}>
        <h1>Иконка {params.name}</h1>
        {icon ? <p>Категория: {icon.category}</p> : ""}
        {icon ? <p>Теги: {icon.tags}</p> : ""}
      </div>
      {icon ? <IconItem icon={icon} /> : <Loader />}
    </main>
  );
}
