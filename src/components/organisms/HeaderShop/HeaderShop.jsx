import Title from "../../atoms/title/Title";
import FilterNavBar from "../../molecules/FilterNavBar/FilterNavBar";
import styles from "./headerShop.module.css";

const HeaderShop = ({ setCategory, sortByDate }) => {
    
    return(
        <>  
            <Title text= "¡Shop Swapp!"/>
            <h3 className={styles.subtitle}>Explore items available for swap:</h3>
            <FilterNavBar setCategory={setCategory} sortByDate={sortByDate}/>
        </>
    )
}

export default HeaderShop;