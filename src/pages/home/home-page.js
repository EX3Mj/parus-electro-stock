import styles from "./home-page.module.css";
import CategoryList from "../../components/category-list/category-list";
import { useContext, useMemo, useState } from "react";
import { DataContext } from "../../services/reducers/data-reducer";
import { Loader } from "../../components/loader/loader";
import IconSearchItem from "../../components/icon-search-item/icon-search-item";

export default function HomePage() {
  const { state } = useContext(DataContext);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredIcons = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return state.data.filter(
      (icon) =>
        icon.name?.toLowerCase().includes(query) ||
        icon.category?.toLowerCase().includes(query) ||
        icon.tags?.toLowerCase().includes(query)
    );
  }, [state.data, searchQuery]);

  return (
    <main className={styles.main}>
      <h1>Корпоративная база иконок Парус электро</h1>
      <div className={styles.search_section}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={
            state.loading
              ? "Загрузка иконок..."
              : "Поиск по названию, категории, тегам..."
          }
          className={styles.search_input}
          disabled={state.loading}
        />
        {filteredIcons.length !== 0 && (
          <>
          <p className={styles.search_title}>Найденные иконки:</p>
          <ul className={styles.results_info}>
            {filteredIcons.map ((icon, index) => (
              <IconSearchItem key={`${icon.name}-${index}`} icon={icon}/>         
            ))}
          </ul>
          </>
        )}
      </div>
      {state.loading ? <Loader /> : <CategoryList />}
    </main>
  );
}
