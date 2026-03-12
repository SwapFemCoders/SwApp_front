import CategoryList from '../../molecules/CategoryList/CategoryList';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import styles from './sidebar-filters.module.css';

const SidebarFilters = ({ articles, filters, onFilter }) => {
  
  const dynamicCategories = [...new Set(
    articles
    .map(a => a.category)
    .filter(cat => cat !== undefined && cat !== null)
  )];
  const updateFilters = (newData) => {
    onFilter({ ...filters, ...newData });
  };

  return (
    <aside className={styles.sidebar}>
      <SearchBar onSearch={updateFilters} />
      
      <CategoryList 
        categories={dynamicCategories} 
        selectedCategory={filters.category}
        onSelect={updateFilters} 
      />

      {/* Aquí podrías meter la molécula de TopUsers más tarde */}
      <section className={styles.adSpace}>
        <p>AD / INFO</p>
      </section>
    </aside>
  );
};

export default SidebarFilters;