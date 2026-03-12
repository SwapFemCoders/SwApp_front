
import { AuthProvider, useAuth } from '../../../context/AuthContext';
import Title from '../../atoms/title/Title';
import AuthModal from '../../molecules/authModal/AuthModal';
// import { RedBackground } from "../../atoms/RedBackground/RedBackground";
import { FullBackground } from "../../atoms/FullBackground/FullBackground";
import ArticleList from '../../organisms/ArticleList/ArticleList';
import styles from './shop.module.css';
import Footer from "../../atoms/Footer/Footer";
import { useEffect, useState } from 'react';
import SidebarFilters from '../../organisms/SidebarFilters/SidebarFilters';
import ArticlesPath from '../../../services/ArticlesPath';

const ShopContent = () => {

    const [list, setList] = useState([]);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [filters, setFilters] = useState({ searchTerm: '', category: 'ALL' });
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
    ArticlesPath().getAllArticles().then(data =>{
        setList(data);
        setFilteredArticles(data);
    });
    },[]);

    useEffect(() => {
        let result = [...list];
        if (filters.searchTerm) {
            result = result.filter(a => 
                a.title.toLowerCase().includes(filters.searchTerm.toLowerCase())
            );
        }
        if (filters.category && filters.category !== 'ALL') {
            result = result.filter(a => a.category === filters.category);
        }

        setFilteredArticles(result);
    }, [filters, list]);

   const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };
    return (
        <main className={styles.shopContainer}>
            <div className={styles.comicDivider}></div>
            <Title text= "SHOP"/>

            <section className={styles.content}>
                {loading ? <p>Cargando...</p> : <ArticleList  articles={filteredArticles}/>}
            </section>

            <aside className={`${styles.sidebar} ${styles.right}`}>
                
                <SidebarFilters 
                    articles={list} 
                    filters={filters} 
                    onFilter={handleFilterChange} 
                />
            </aside>
        </main>
    );
};

 export default function Shop() {
    return (
         <>
        <FullBackground content={
            <AuthProvider >
                <ShopContent />
            </AuthProvider>
        }/>
        <Footer/>
        </>
    );
}