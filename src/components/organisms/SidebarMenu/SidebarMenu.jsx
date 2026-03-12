import SidebarButton from "../../molecules/SidebarButton/SidebarButton";
import Avatar from "../../atoms/AvatarUser/AvatarUser";
import styles from "./sidebar-menu.module.css";
import Title from "../../atoms/title/Title"
import { FcSynchronize } from "react-icons/fc";
import { FcNews } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
//import { FcLike } from "react-icons/fc";
//import { FcSettings } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const SidebarMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return(
        <>
        
        <aside className={styles.sidebar}>
            
            <div className={styles.containerUser}>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    {isOpen ? <CgClose /> : <RxHamburgerMenu />}
                </button>
                <Avatar />
                <p className={styles.welcome}>Tienes X puntos</p>
            </div>
            <div className={`${styles.containerMenu} ${isOpen ? styles.open : ''}`}>
                <SidebarButton 
                    label="Shop Swapp" 
                    icon={<FcShop size="2em"/>}  
                    to="/shop"
                    className={`${styles.item} ${styles.cyan}`} 
                />
                
                <SidebarButton
                    label="My available swaps"
                    icon={<FcSynchronize size="2em" />}
                    to="/Profile/myswaps"
                    className={`${styles.item} ${styles.yellow}`} 
                />

                <SidebarButton
                    label="Create new article"
                    icon={<FcNews size="2em" />} 
                    to="/Profile/create"
                    className={`${styles.item} ${styles.cyan}`} 
                />
                                
                <SidebarButton 
                    label="Swap history"
                    icon={<FcClock size="2em" />} 
                    to="/Profile/history"
                    className={`${styles.item} ${styles.yellow}`} 
                />
                
                {/* <MenuItem className={`${styles.item} ${styles.cyan}`} icon={<FcLike size="2em" />} label="Favorites"/>
                <MenuItem className={`${styles.item} ${styles.yellow}`} icon={<FcSettings size="2em" />} label="Settings"/> */}
            </div>
        </aside>
        </>
    )
}

export default SidebarMenu;