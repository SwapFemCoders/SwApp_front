import ArticleList from '../../organisms/ArticleList/ArticleList';
import styles from './shop.module.css';

const Shop = () => {
    return (
        <main className={styles.shopContainer}>
            <div className={styles.comicDivider}></div>
            {/* 2. Título de la página */}
            <header className={styles.header}>
                <h1>SHOP</h1>
            </header>

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
        </main>
    );
};

export default Shop;