import { AuthProvider, useAuth } from '../../../context/AuthContext';
import AuthModal from '../../molecules/authModal/AuthModal';
import { FullBackground } from "../../atoms/FullBackground/FullBackground";
import ArticleList from '../../organisms/ArticleList/ArticleList';
import styles from './shop.module.css';
import Footer from "../../atoms/Footer/Footer";
<<<<<<< HEAD
import HeaderShop from '../../organisms/HeaderShop/HeaderShop';
import { useState } from "react";

const ShopContent = ({category, sortNewest}) => {
    const { isModalOpen, closeAuthModal } = useAuth();
=======
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

>>>>>>> 0e7c4bf10ced19e02c444141667e84aed36d35b8
    return (
        <>
        <AuthModal isOpen={isModalOpen} onClose={closeAuthModal} />
        <main>
            <section className={styles.content}>
<<<<<<< HEAD
                <ArticleList 
                    category={category}
                    sortNewest={sortNewest}/>
            </section>          
=======
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
>>>>>>> 0e7c4bf10ced19e02c444141667e84aed36d35b8
        </main>
       </> 
    );
};

 export default function Shop() {
    const [category, setCategory] = useState("all");
    const [sortNewest, setSortNewest] = useState(true);

    const sortByDate = () => {
        setSortNewest(!sortNewest);
    };
    return (
        <>
        <FullBackground content={
            <AuthProvider >
                <HeaderShop 
                    setCategory={setCategory}
                    sortByDate={sortByDate}/>
                <ShopContent 
                    category={category}
                    sortNewest={sortNewest}/>
            </AuthProvider>
        }/>
        <Footer/>
        </>
    );
}