import styles from './search-bar.module.css';

const SearchBar = ({ onSearch }) => {
  return (
    <section className={styles.searchWrapper}>
      <h3 className={styles.sidebarTitle}>SEARCH</h3>
      <div className={styles.inputContainer}>
        <input 
          type="text" 
          placeholder="Search..." 
          onChange={(e) => onSearch({ searchTerm: e.target.value })}
          className={styles.searchInput}
        />
        <span className={styles.searchIcon}>🔍</span>
      </div>
    </section>
  );
};

export default SearchBar;