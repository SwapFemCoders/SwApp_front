import SidebarButton from "../../molecules/SidebarButton/SidebarButton";
import Avatar from "../../atoms/avatarUser/AvatarUser";
import styles from "./sidebar-menu.module.css";
import { FcSynchronize } from "react-icons/fc";
import { FcNews } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
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
            </div>
            <div className={`${styles.containerMenu} ${isOpen ? styles.open : ''}`}>
                
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

                <SidebarButton 
                    label="Settings" 
                    icon={<FcSettings size="2em"/>}  
                    className={`${styles.item} ${styles.cyan}`} 
                />
                
            </div>
        </aside>
        </>
    )
}

export default SidebarMenu;