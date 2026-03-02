import PlusButton from '../../atoms/plusButton/PlusButton';
import styles from './article-card.module.css';

const ArticleCard = ({ title, imageSrc, onAction }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardBody}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.imageWrapper}>
          <img src={imageSrc} alt={title} className={styles.productImage} />
        </div>
      </div>
      
      <div className={styles.buttonPositioner}>
        <PlusButton onClick={onAction} />
      </div>
    </div>
  );
};

export default ArticleCard;