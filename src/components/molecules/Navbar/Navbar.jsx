import { useContext } from "react";
import NavbarButton from "../../atoms/NavbarButton/NavbarButton";
import styles from "./Navbar.module.css";
import {UserContext} from "../../../context/User/UserContext";
import { useNavigate } from "react-router";

const Navbar = () => {

    const { isLogged, logout } = useContext(UserContext);
    const navigate = useNavigate();

    if (isLogged){
        return (
        <div className={styles.bar} alt="swapp logo">         
            <NavbarButton name="LOG OUT" onClick={logout}/>
            <NavbarButton name="SHOP" onClick={() => navigate("/Shop")}/>
            <NavbarButton name="PROFILE" onClick={() => navigate("/Profile")}/>
        </div>
        )}
    else return (
        <div className={styles.bar} alt="swapp logo">         
            <NavbarButton name="SIGN UP" onClick={() => navigate("/SignUp")}/>
            <NavbarButton name="LOG IN" onClick={() => navigate("/LogIn")}/>
            <NavbarButton name="SHOP" onClick={() => navigate("/Shop")}/>
        </div>
    )};


export default Navbar;


