import { useState } from 'react';
import redHeart from '../../../assets/images/red-heart.png';
import whiteHeart from '../../../assets/images/white-heart.jpg';
import styles from './favorite-button.module.css';
import { useAuth } from '../../../context/AuthContext';

const FavoriteButton = ({ articleId }) => {
    const [isFavorite, setIsFavorite] = useState(false);

   // const { isLogged } = useAuth(); 
    const { isLogged,openAuthModal } = useAuth();

    const handleFavClick = (e) => {
        e.stopPropagation(); 

         if (!isLogged) {
           return openAuthModal();
        }
        try{
            setIsFavorite(!isFavorite);
            //llamada a la API para guardar favorito
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