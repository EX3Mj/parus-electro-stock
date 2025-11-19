import CategoryItem from "../category-item/category-item";
import styles from "./category-list.module.css";
import { useContext } from "react";
import { DataContext } from "../../services/reducers/data-reducer";
import CategoryItemLogo from "../logo-list/logo-list";

export default function CategoryList() {
  
  const { state } = useContext(DataContext);

  const categoryArray = state.sort.split(", ");
  

  return (
    <ul className={styles.category_list}>
      <CategoryItemLogo />
      {categoryArray.map((category, index) => (
        <CategoryItem
          key={`${category}-${index}`}
          category={category}
        />
      ))}
    </ul>
  );
}
