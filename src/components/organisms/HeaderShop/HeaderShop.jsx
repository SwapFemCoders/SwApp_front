import Title from "../../atoms/title/Title";
import styles from "./headerShop.module.css";

const HeaderShop = () => {
    return(
        <>
            <Title text= "¡Welcome to Shop Swapp!"/>
            <h3 className={styles.subtitle}>Explore items available for swap</h3>
           
        </>
    )
}

export default HeaderShop;