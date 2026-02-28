import styles from './NavbarButton.module.css';

const NavbarButton = ({name}) => (
        <>
            <div className={styles.button}>
                <p className={styles.text}>{name}
                </p>
                <a href="">

                </a>
            </div>
        </>
    )

export default NavbarButton ;