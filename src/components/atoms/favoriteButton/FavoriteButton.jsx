import { useContext, useState } from 'react';
import redHeart from '../../../assets/images/red-heart.png';
import whiteHeart from '../../../assets/images/white-heart.png';
import styles from './favorite-button.module.css';
import { UserContext } from '../../../context/User/UserContext';

const FavoriteButton = ({ articleId }) => {
    const [isFavorite, setIsFavorite] = useState(false);

   const { openAuthModal, user} = useContext(UserContext);

    const handleFavClick = (e) => {
        e.stopPropagation(); 

        if (!user || !localStorage.getItem("token")) {
           return openAuthModal();
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