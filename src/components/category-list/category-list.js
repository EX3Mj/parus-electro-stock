import CategoryItem from "../category-item/category-item";
import styles from "./category-list.module.css";
import { useContext } from "react";
import { DataContext } from "../../services/reducers/data-reducer";

export default function CategoryList() {
  
  const { state } = useContext(DataContext);

  const categoryArray = state.sort.split(", ");
  

  return (
    <ul className={styles.category_list}>
      {categoryArray.map((category, index) => (
        <CategoryItem
          key={`${category}-${index}`}
          category={category}
        />
      ))}
    </ul>
  );
}
