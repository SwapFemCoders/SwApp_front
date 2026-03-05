import FavoriteButton from '../../atoms/favoriteButton/FavoriteButton';
import styles from './article-details.module.css';

const ArticleDetails = ({ article, onClose }) => {
    return (
        <div className={styles.modal_overlay} onClick={onClose}>
            <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                <div className={styles.fav_positioner}>
                     <FavoriteButton /> 
                </div>
                <header className={styles.modal_header}>
                    <h2>{article.title.toUpperCase()}</h2>
                </header>

                <div className={styles.modal_body}>
                    <div className={styles.image_container}>
                        <img src={article.picture} alt={article.title} />
                    </div>
                    
                    <div className={styles.details}>
                        <p><strong>Description:</strong> {article.description}</p>
                        <p><strong>Creation date:</strong> {article.date}</p>
                        <p><strong>State:</strong> {article.state}</p>
                        <p><strong>Listed by:</strong> @{article.user}</p>
                    </div>
                </div>

                <div className={styles.modal_actions}>
                    <button className={styles.reserve_btn}>RESERVE</button>
                    <button onClick={onClose} className={styles.close_x}>X</button>
                </div>
            </div>
        </div>
    );
};

export default ArticleDetails;