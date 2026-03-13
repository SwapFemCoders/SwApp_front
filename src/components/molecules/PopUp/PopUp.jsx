import { useState } from "react";
import styles from "./PopUp.module.css";

const Popup = ({ title, children, onClose }) => {

    const [showPopup, setShowPopup] = useState(false);

    return (
    <div className={styles.overlay}>
        <div className={styles.popup}>
            <div className={styles.header}>
                <h2>{title}</h2>
                <button className={styles.closeButton} onClick={onClose}>
                    ×
                </button>
            </div>
            <div className={styles.content}>{children}</div>
        </div>
    </div>
    );
};

export default Popup;