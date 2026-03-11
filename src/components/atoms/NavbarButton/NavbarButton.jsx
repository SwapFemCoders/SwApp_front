import styles from './NavbarButton.module.css';

const NavbarButton = ({name, url, onClick}) => (
        <>
            <div className={styles.button}>
                <a href={url} className={styles.text} onClick={onClick}> {name}
                </a>
            </div>
        </>
    )

export default NavbarButton ;