import MenuItem from "../../molecules/MenuItem/MenuItem";
import Avatar from "../../atoms/Avatar/Avatar";
import styles from "./sidebar-menu.module.css";

const SidebarMenu = ({userLogin}) => {

    return(
        <>
        <aside className={styles.sidebar}>
            <Avatar src="/avatar.png"/>
            <p className={styles.welcome}>Welcome {userLogin}</p>
            <MenuItem label="My available swaps"/>
            <MenuItem label="Create new article"/>
            <MenuItem label="Swap history"/>
            <MenuItem label="Favorites"/>
            <MenuItem label="Settings"/>
        </aside>
        </>
    )
}

export default SidebarMenu;