import styles from "./menu-item.module.css";

const MenuItem = ({icon,label,onClick, className})=>{
  return(
    <>
      <button className={`${className} ${styles.btnMenu}`} onClick={onClick}>
        <figure>{icon}</figure>
        <span className={styles.label}>{label}</span>
      </button>
    </>
  )
}

export default MenuItem;