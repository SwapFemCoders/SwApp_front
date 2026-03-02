import NavbarButton from "../../atoms/NavbarButton/NavbarButton";
import styles from "./Navbar.module.css";

const Navbar = () => (
    <>
        <div className={styles.bar} alt="swapp logo">         
            <NavbarButton name="SIGN IN"/>
            <NavbarButton name="LOG IN"/>
            <NavbarButton name="SHOP"/>
            <NavbarButton name="PROFILE"/>
        </div>

    </>
    );


export default Navbar;