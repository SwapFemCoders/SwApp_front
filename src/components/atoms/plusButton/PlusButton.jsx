import styles from "./plus-button.module.css";

const PlusButton = ({ onClick }) => {
    return (
        <button className={styles.plusButton} onClick={onClick}>
            <span className={styles.plusText}>...</span>
        </button>
    );
};

export default PlusButton;