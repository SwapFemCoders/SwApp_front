
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
    const { isModalOpen, closeAuthModal } = useAuth();
    const [list, setList] = useState([]);
    const [filters, setFilters] = useState({ searchTerm: '', category: 'ALL' });
    const [loading, setLoading] = useState(true);

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
            {/* 2. Título de la página */}
            <Title text= "SHOP"/>

            {/* 3. Lateral Izquierdo */}
            <aside className={`${styles.sidebar} ${styles.left}`}>
                <div className={styles.placeholder}>FILTERS / AD</div>
            </aside>

            {/* 4. Contenido Principal (Nuestra Lista) */}
            <section className={styles.content}>
                <ArticleList  filters ={filters}/>
            </section>

            {/* 5. Lateral Derecho */}
            <aside className={`${styles.sidebar} ${styles.right}`}>
                
                <SidebarFilters 
                    articles={[]} 
                    filters={filters} 
                    onFilter={handleFilterChange} 
                />
            </aside>
           
            <AuthModal isOpen={isModalOpen} onClose={closeAuthModal} />
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