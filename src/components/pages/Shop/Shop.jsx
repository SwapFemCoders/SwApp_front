
import { AuthProvider, useAuth } from '../../../context/AuthContext';
import Title from '../../atoms/title/Title';
import AuthModal from '../../molecules/authModal/AuthModal';
// import { RedBackground } from "../../atoms/RedBackground/RedBackground";
import ArticleList from '../../organisms/ArticleList/ArticleList';
import styles from './shop.module.css';

const ShopContent = () => {
    const { isModalOpen, closeAuthModal } = useAuth();
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
                <ArticleList />
            </section>

            {/* 5. Lateral Derecho */}
            <aside className={`${styles.sidebar} ${styles.right}`}>
                <div className={styles.placeholder}>INFO / AD</div>
            </aside>

            {/* 6. Footer (Opcional) */}
            <footer className={styles.footer}>
                <div className={styles.placeholder}>FOOTER</div>
            </footer>
            <AuthModal isOpen={isModalOpen} onClose={closeAuthModal} />
        </main>
    );
};

 export default function Shop() {
    return (
        <AuthProvider >
            <ShopContent />
        </AuthProvider>
    );
}