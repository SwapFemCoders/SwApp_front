import styles from './NavbarButton.module.css';

const NavbarButton = ({name, url}) => (
        <>
            <div className={styles.button}>
                <a href={url} className={styles.text}> {name}
                </a>
            </div>
        </>
    )

export default NavbarButton ;