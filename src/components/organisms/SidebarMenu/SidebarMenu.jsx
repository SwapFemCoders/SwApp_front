import MenuItem from "../../molecules/MenuItem/MenuItem";
import Avatar from "../../atoms/AvatarUser/AvatarUser";
import styles from "./sidebar-menu.module.css";
import { FcSynchronize } from "react-icons/fc";
import { FcNews } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

const SidebarMenu = ({userName}) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return(
        <>
        {/*
        <nav className={styles.sidebarContainer}>
            <div className={styles.mobileHeader}>
                <span className="styles.userName">{userName}</span>
                <button className="styles.hamburger" onClick={toggleMenu}>
                    {isOpen ? <CgClose /> : <RxHamburgerMenu />}
                </button>
            </div>
            <ul className={`${styles.menuList} ${isOpen ? styles.open : ''}`}>
                <li className={styles.btnMenu}>
                    <span><FcShop/></span>Shop Swapp
                </li>
                <li className={styles.btnMenu}>
                    <span><FcSynchronize/></span>My available swaps
                </li>
                <li className={styles.btnMenu}>
                    <span><FcNews/></span>Create new article
                </li>
                <li className={styles.btnMenu}>
                    <span><FcClock/></span>Swap history
                </li>
                <li className={styles.btnMenu}>
                    <span><FcLike/></span>Favorites
                </li>
                <li className={styles.btnMenu}>
                    <span><FcSettings/></span>Settings
                </li>
            </ul>
        </nav>
            */}
        <aside className={styles.sidebar}>
            
            <div className={styles.containerUser}>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    {isOpen ? <CgClose /> : <RxHamburgerMenu />}
                </button>
                <Avatar />
                <p className={styles.welcome}>Welcome {userName}</p>
            </div>
            <div className={`${styles.containerMenu} ${isOpen ? styles.open : ''}`}>
                <MenuItem className={`${styles.item} ${styles.magenta}`} icon={<FcShop size="2em"/>} label="Shop Swapp"/>
                <MenuItem className={`${styles.item} ${styles.yellow}`} icon={<FcSynchronize size="2em" />} label="My available swaps"/>
                <MenuItem className={`${styles.item} ${styles.magenta}`} icon={<FcNews size="2em" />} label="Create new article"/>
                <MenuItem className={`${styles.item} ${styles.yellow}`} icon={<FcClock size="2em" />} label="Swap history"/>
                <MenuItem className={`${styles.item} ${styles.magenta}`} icon={<FcLike size="2em" />} label="Favorites"/>
                <MenuItem className={`${styles.item} ${styles.yellow}`} icon={<FcSettings size="2em" />} label="Settings"/>
            </div>
        </aside>
        </>
    )
}

export default SidebarMenu;