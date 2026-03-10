
import { AuthProvider, useAuth } from '../../../context/AuthContext';

import AuthModal from '../../molecules/authModal/AuthModal';
import { FullBackground } from "../../atoms/FullBackground/FullBackground";
import ArticleList from '../../organisms/ArticleList/ArticleList';
import styles from './shop.module.css';
import Footer from "../../atoms/Footer/Footer";
import HeaderShop from '../../organisms/HeaderShop/HeaderShop';

const ShopContent = () => {
    const { isModalOpen, closeAuthModal } = useAuth();
    return (
        
        <main className={styles.headerShopContainer}>
            <div className={styles.comicDivider}></div>
            {/* 2. Título de la página */}
            

            {/* 3. Lateral Izquierdo */}
            <aside className={`${styles.sidebar} ${styles.left}`}>
                <div className={styles.placeholder}>FILTERS / AD</div>
            </aside>

            {/* 4. Contenido Principal (Nuestra Lista) */}
            <section className={styles.content}>
                <ArticleList />
            </section>

            {/* 5. Lateral Derecho */}
            <aside className={`${styles.sidebar} ${styles.right}`}>
                <div className={styles.placeholder}>INFO / AD</div>
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
                <HeaderShop/>
                <ShopContent />
            </AuthProvider>
        }/>
        <Footer/>
        </>
    );
}