import { useContext } from "react";
import NavbarButton from "../../atoms/NavbarButton/NavbarButton";
import styles from "./Navbar.module.css";
import {UserContext} from "../../../context/User/UserContext";

const Navbar = () => {

    const { isLogged, logout } = useContext(UserContext);

    if (isLogged){
        return (
        <div className={styles.bar} alt="swapp logo">         
            <NavbarButton name="LOG OUT" onclick={logout}/>
            <NavbarButton name="SHOP" url="/Shop"/>
            <NavbarButton name="PROFILE" url="/Profile"/>
        </div>
        )}
    else return (
        <div className={styles.bar} alt="swapp logo">         
            <NavbarButton name="SIGN UP" url="/SignUp" />
            <NavbarButton name="LOG IN" url="/LogIn"/>
            <NavbarButton name="SHOP" url="/Shop"/>
        </div>
    )};


export default Navbar;


