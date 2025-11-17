import IconListItem from "../icon-list-item/icon-list-item";
import styles from "./category-item.module.css";
import { DataContext } from "../../services/reducers/data-reducer";
import { useContext } from "react";

export default function CategoryItem({ category }) {
  const { state } = useContext(DataContext);

  const categoryIconList = state.data.filter((item) => item.category === category);

  return (
    <li className={styles.category_item}>
      <h3>{category}</h3>
      <ul className={styles.category_item__icon_list}>
        {categoryIconList.map((icon, index) => (
          <IconListItem key={`${icon.name}-${index}`} icon={icon}/>
        ))}
      </ul>
    </li>
  );
}
