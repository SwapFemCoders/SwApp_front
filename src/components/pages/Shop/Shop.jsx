import { AuthProvider, useAuth } from '../../../context/AuthContext';
import AuthModal from '../../molecules/authModal/AuthModal';
import { FullBackground } from "../../atoms/FullBackground/FullBackground";
import ArticleList from '../../organisms/ArticleList/ArticleList';
import styles from './shop.module.css';
import Footer from "../../atoms/Footer/Footer";
import HeaderShop from '../../organisms/HeaderShop/HeaderShop';
import { useState } from "react";

const ShopContent = ({category, sortNewest}) => {
    const { isModalOpen, closeAuthModal } = useAuth();
    return (
        <>
        <AuthModal isOpen={isModalOpen} onClose={closeAuthModal} />
        <main>
            <section className={styles.content}>
                <ArticleList 
                    category={category}
                    sortNewest={sortNewest}/>
            </section>          
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