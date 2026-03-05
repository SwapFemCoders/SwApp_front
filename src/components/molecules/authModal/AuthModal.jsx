import styles from './auth-modal.module.css';

const AuthModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className={styles.closeX}>X</button>
                <h3>Do you want to see more?</h3>
                <p>Login or registrer for more details!</p>
                <div className={styles.buttons}>
                    <button className={styles.btnLog}>LOG IN</button>
                    <button className={styles.btnReg}>REGISTER</button>
                </div>
            </div>
        </div>
    );
};
export default AuthModal;