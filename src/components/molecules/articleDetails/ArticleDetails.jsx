import ActionButton from '../../atoms/actionButton/ActionButton';
import FavoriteButton from '../../atoms/favoriteButton/FavoriteButton';
import CloseButton from '../../atoms/closeButton/CloseButton';
import styles from './article-details.module.css';
import { useContext, useState} from 'react';
import { useLocation, useNavigate } from 'react-router';
import { UserContext } from '../../../context/User/UserContext';
import ArticlesPath from '../../../services/ArticlesPath';

const ArticleDetails = ({ article, onClose }) => {
    console.log(article);
    const { openAuthModal, user} = useContext(UserContext);
    const [currentArticle, setCurrentArticle] = useState(article);
    const [loading, setLoading] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const isMySwaps = location.pathname === '/myswaps';
    const isOwner = user?.id === article.creatorId.id;

    
    const handleReserve = async() =>{
        if (!user || !localStorage.getItem("token")) {
        return openAuthModal();
        }
        const isCancelling = currentArticle.reservedId === user?.id;
        setLoading(true);
        try{
            const updatedArticle = await ArticlesPath().reserveArticle(currentArticle.id);
            setCurrentArticle(updatedArticle);
            if (isCancelling) {
            alert("Reservation cancelled successfully");
        } else {
            alert("Reserve confirmed!");
        }
        } catch (error) {
            if (error.response?.status === 401 || error.response?.status === 403) {
            return; 
        }
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
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this article?")) {
            try {
                await ArticlesPath().deleteArticle(article.id);
                alert("Article deleted");
                onClose();
                window.location.reload(); 
            } catch (error) {
                alert("Error deleting article");
            }
        }
    };

    const handleEdit = () => {
        navigate(`/Profile/edit/${article.id}`);
    };   
    const fullImageSrc = `data:image/png;base64,${article.picture}`;
    return (
        <aside className={styles.modal_overlay} onClick={onClose}>
            <article className={styles.modal_content} onClick={e => e.stopPropagation()}>
                <div className={styles.fav_positioner}>
                    
                </div>
                <header className={styles.modal_header}>
                    <h2>{article.title.toUpperCase()}</h2>
                </header>

                <section className={styles.modal_body}>
                    <figure className={styles.image_container}>
                        <img src={fullImageSrc} alt={article.title} />
                    </figure>
                    
                    <section className={styles.details}>
                        <p><strong>Description:</strong> {article.description}</p>
                        <p><strong>Creation date:</strong> {article.date}</p>
                        <p><strong>State:</strong> {article.state}</p>
                        <p><strong>Listed by:</strong> @{article.creatorId.userName}</p>
                    </section>
                </section>

                <footer className={styles.modal_actions}>
                    {isOwner ? (
                    <>
                        <ActionButton 
                            text="EDIT" 
                            className="edit" 
                            onClick={handleEdit} 
                        />
                        <ActionButton 
                            text="DELETE" 
                            className="delete" 
                            onClick={handleDelete} 
                        />
                        </>
                    ) : (
                    <ActionButton text= {loading ? "Loading..." : buttonText} 
                                    className = {buttonClass} onClick = {isClickable ? handleReserve : null} 
                                    disabled ={!isClickable || loading}/>)}
                    <FavoriteButton /> 
                    < CloseButton onClick={onClose} />
                </footer>
            </article>
        </aside>
    );
};

export default ArticleDetails;