import styles from "./sidebarButton.module.css";
import { useNavigate, useLocation } from "react-router";

const SidebarButton = ({icon, label, to, className})=>{
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === to;
  
  return(
    <>
      <button className={`${className} ${styles.btnMenu} ${isActive ? styles.active : ''}`} onClick={() => navigate(to)}>
        <figure>{icon}</figure>
        <span className={styles.label}>{label}</span>
      </button>
    </>
  )
}

export default SidebarButton;