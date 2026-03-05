import { useState } from 'react';
import redHeart from '../../../assets/images/red-heart.png';
import whiteHeart from '../../../assets/images/white-heart.jpg';
import styles from './favorite-button.module.css';

const FavoriteButton = ({ articleId, isLogged, onShowLogin }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavClick = (e) => {
        e.stopPropagation(); 

        if (!isLogged) {
            return onShowLogin();
        }
        try{
            setIsFavorite(!isFavorite);
            console.log("Saving...");
        }catch (error){
            console.error("error in saved", error);
        }
    };

    return (
        <button className={styles.favBtn} onClick={handleFavClick}>
            <img 
                src={isFavorite ? redHeart : whiteHeart}
                alt="Fav"
            />
        </button>
    );
};
export default FavoriteButton;