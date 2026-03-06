import styles from "./menu-item.module.css";

const MenuItem = ({icon,label,onClick})=>{
  return(
    <>
      <div className={styles.item} onClick={onClick}>
        <span className={styles.icon}>{icon}</span>
        <span>{label}</span>
      </div>
    </>
  )
}

export default MenuItem;