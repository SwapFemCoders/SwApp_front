
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
    const [filters, setFilters] = useState({ searchTerm: '', category: 'ALL' });

    useEffect(()=>{
    //setList(MockArticles);
        ArticlesPath().getAllArticles().then(data =>{setList(data)});
    }, []);

   const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };
    return (
        <main className={styles.shopContainer}>
            <div className={styles.comicDivider}></div>
            <Title text= "SHOP"/>

            {/* 3. Lateral Izquierdo
            <aside className={`${styles.sidebar} ${styles.left}`}>
                <div className={styles.placeholder}>FILTERS / AD</div>
            </aside> */}

            <section className={styles.content}>
                <ArticleList  filters ={filters}/>
            </section>

            <aside className={`${styles.sidebar} ${styles.right}`}>
                
                <SidebarFilters 
                    articles={[]} 
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