
import FavoriteButton from '../../atoms/favoriteButton/FavoriteButton';
import styles from './article-card.module.css';

const ArticleCard = ({ title, imageSrc, onAction }) => {
  const fullImageSrc = `data:image/png;base64,${imageSrc}`;
  return (
    <article className={styles.cardContainer} onClick={onAction}>
      <header className={styles.favPositioner}>
        <FavoriteButton />
      </header>
      <main className={styles.cardBody}>
        <h2 className={styles.title}>{title}</h2>
        <figure className={styles.imageWrapper}>
          <img src={fullImageSrc} alt={title} className={styles.productImage} />
        </figure>
      </main>
    </article>
  );
};

export default ArticleCard;