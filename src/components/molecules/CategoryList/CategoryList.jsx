import styles from './category-list.module.css';

const CategoryList = ({ categories, onSelect, selectedCategory }) => {
  return (
    <nav className={styles.categoryNav}>
      <h3 className={styles.sidebarTitle}>CATEGORIES</h3>
      <ul className={styles.list}>
        {/* Siempre añadimos la opción de ver todo */}
        <li key="ALL">
          <button 
            className={`${styles.categoryBtn} ${selectedCategory === 'ALL' ? styles.active : ''}`}
            onClick={() => onSelect({ category: 'ALL' })}
          >
            ALL
          </button>
        </li>
        {categories.map((cat) => (
          <li key={cat}>
            <button 
              className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.active : ''}`}
              onClick={() => onSelect({ category: cat })}
            >
              {cat.replace('_', ' ')}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryList;