import MenuItem from "../../molecules/MenuItem/MenuItem";
import Avatar from "../../atoms/AvatarUser/AvatarUser";
import styles from "./sidebar-menu.module.css";
import Title from "../../atoms/title/Title"
import { FcSynchronize } from "react-icons/fc";
import { FcNews } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const SidebarMenu = ({userName, activeTab}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const [isSeleted, setIsSelected] = useState(null);

    return(
        <>
        <Title text="Welcome"/> {/*//falta agregar el username logeado */}
        
        <aside className={styles.sidebar}>
            
            <div className={styles.containerUser}>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    {isOpen ? <CgClose /> : <RxHamburgerMenu />}
                </button>
                <Avatar />
                <p className={styles.welcome}>Welcome {userName}</p>
            </div>
            <div className={`${styles.containerMenu} ${isOpen ? styles.open : ''}`}>
                <MenuItem className={`${styles.item} ${styles.cyan} ${isSeleted ? styles.selected : ''}`} onClick={()=> setIsSelected(true)} icon={<FcShop size="2em"/>} label="Shop Swapp"/>
                <MenuItem className={`${styles.item} ${styles.yellow}`} icon={<FcSynchronize size="2em" />} label="My available swaps"/>
                <MenuItem className={`${styles.item} ${styles.cyan}`} icon={<FcNews size="2em" />} label="Create new article"/>
                <MenuItem className={`${styles.item} ${styles.yellow}`} icon={<FcClock size="2em" />} label="Swap history"/>
                <MenuItem className={`${styles.item} ${styles.cyan}`} icon={<FcLike size="2em" />} label="Favorites"/>
                <MenuItem className={`${styles.item} ${styles.yellow}`} icon={<FcSettings size="2em" />} label="Settings"/>
            </div>
        </aside>
        </>
    )
}

export default SidebarMenu;