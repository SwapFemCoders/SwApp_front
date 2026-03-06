import { useAuth } from '../../../context/AuthContext';
import ActionButton from '../../atoms/actionButton/ActionButton';
import FavoriteButton from '../../atoms/favoriteButton/FavoriteButton';
import CloseButton from '../../atoms/closeButton/CloseButton';
import styles from './article-details.module.css';

const ArticleDetails = ({ article, onClose }) => {
    const { isLogged,openAuthModal } = useAuth();
    
    const handleReserve = () =>{
        if (!isLogged) {
           return openAuthModal();
        }
    }
        //tema reserva con bbdd y algo q diga ok! reservado etc
    const fullImageSrc = `data:image/png;base64,${article.picture}`;
    return (
        <div className={styles.modal_overlay} onClick={onClose}>
            <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                <div className={styles.fav_positioner}>
                    
                </div>
                <header className={styles.modal_header}>
                    <h2>{article.title.toUpperCase()}</h2>
                </header>

                <div className={styles.modal_body}>
                    <div className={styles.image_container}>
                        <img src={fullImageSrc} alt={article.title} />
                    </div>
                    
                    <div className={styles.details}>
                        <p><strong>Description:</strong> {article.description}</p>
                        <p><strong>Creation date:</strong> {article.date}</p>
                        <p><strong>State:</strong> {article.state}</p>
                        <p><strong>Listed by:</strong> @{article.creator}</p>
                    </div>
                </div>

                <div className={styles.modal_actions}>
                    <ActionButton text= "RESERVE" className = "reserve" onClick = {handleReserve}/>
                     <FavoriteButton /> 
                    < CloseButton onClick={onClose} />
                </div>
            </div>
        </div>
    );
};

export default ArticleDetails;