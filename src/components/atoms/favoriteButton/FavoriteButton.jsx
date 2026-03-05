import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useModal } from '../../../context/ModalContext';
import redHeart from '../../../assets/images/red-heart.png';
import whiteHeart from '../../../assets/images/white-heart.jpg';
import styles from './favorite-button.module.css';

const FavoriteButton = ({ articleId }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const { isLogged } = useAuth(); 
    const { openLoginModal } = useModal();

    const handleFavClick = (e) => {
        e.stopPropagation(); 

        if (!isLogged) {
            return openLoginModal();
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