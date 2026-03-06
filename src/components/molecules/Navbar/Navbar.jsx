import NavbarButton from "../../atoms/NavbarButton/NavbarButton";
import styles from "./Navbar.module.css";

const Navbar = () => (
    <>
        <div className={styles.bar} alt="swapp logo">         
            <NavbarButton name="SIGN UP" url="/SignUp" />
            <NavbarButton name="LOG IN" url="/LogIn"/>
            <NavbarButton name="SHOP" url="/Shop"/>
            <NavbarButton name="PROFILE" url="/Profile"/>
        </div>

    </>
    );


export default Navbar;