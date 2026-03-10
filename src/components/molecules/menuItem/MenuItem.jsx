import styles from "./menu-item.module.css";
import { useState } from "react";

const MenuItem = ({icon,label, className})=>{
  const [isActive, setIsActive] = useState(null);
  
  return(
    <>
      <button className={`${className} ${styles.btnMenu} ${isActive ? styles.active : ''}`} onClick={()=>setIsActive(true)}>
        <figure>{icon}</figure>
        <span className={styles.label}>{label}</span>
      </button>
    </>
  )
}

export default MenuItem;