import styles from "./buttonFilter.module.css";

const ButtonFilter = ({ children, onClick, active }) => {
  return (
    <button
      className={`${styles.button} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonFilter;