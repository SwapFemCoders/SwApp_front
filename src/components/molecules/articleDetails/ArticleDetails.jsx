import ActionButton from '../../atoms/actionButton/ActionButton';
import FavoriteButton from '../../atoms/favoriteButton/FavoriteButton';
import CloseButton from '../../atoms/closeButton/CloseButton';
import styles from './article-details.module.css';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../context/User/UserContext';
import ArticlesPath from '../../../services/ArticlesPath';
import AuthModal from '../AuthModal/AuthModal';

const ArticleDetails = ({ article, onClose }) => {
    console.log(article);
    const { isLogged, setIsLogged, openAuthModal, isModalOpen, closeAuthModal, user} = useContext(UserContext);
    const [currentArticle, setCurrentArticle] = useState(article);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && !isLogged) {
            setIsLogged(true);
        }
    }, [isLogged, setIsLogged]);

    const handleReserve = async() =>{
        if (!isLogged) {
           return openAuthModal();
        }

           setLoading(true);
           try{
            const updatedArticle = await ArticlesPath().reserveArticle(currentArticle.id);
            setCurrentArticle(updatedArticle);
            alert("¡Reserve confirmed!");
        } catch (error) {
            alert("Error to reserve: " + (error.response?.data || error.message));
        } finally {
            setLoading(false);
        }
    };
        let buttonText = "RESERVE";
        let isClickable = true;
        let buttonClass = "reserve"; 

        if (currentArticle.reservedId) {
        if (currentArticle.reservedId === user?.id) {
            
            buttonText = "CANCEL RESERVE";
            buttonClass = "default"; 
        } else {
            
            buttonText = "RESERVED";
            isClickable = false;
            buttonClass = "reserved";
        }
    }
        
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
                        <p><strong>Listed by:</strong> @{article.creatorId.userName}</p>
                    </div>
                </div>

                <div className={styles.modal_actions}>
                    <ActionButton text= {loading ? "Loading..." : buttonText} 
                                    className = {buttonClass} onClick = {isClickable ? handleReserve : null} 
                                    disabled ={!isClickable || loading}/>
                     <FavoriteButton /> 
                    < CloseButton onClick={onClose} />
                </div>
            </div>
            <AuthModal isOpen={isModalOpen} onClose={closeAuthModal} />
        </div>
    );
};

export default ArticleDetails;