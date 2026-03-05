import styles from"./action-button.module.css";

const ActionButton=({text, className, onClick})=>{
const btnClass = `${styles.base} ${styles[className]}`;
return(
<>
<button className={btnClass} onClick={onClick}>{text}</button>
</>

)
}

export default ActionButton;