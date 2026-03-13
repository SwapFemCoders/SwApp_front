import { NavLink } from "react-router";
import style from "./Logo.module.css";

const Logo = () => (
    <div>
        <NavLink to="/"><img src="../src/assets/images/Logo.png" alt="" className={style.logo}/></NavLink>
    </div>
)

export default Logo;