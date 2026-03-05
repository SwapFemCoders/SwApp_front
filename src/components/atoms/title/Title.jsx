import styles from './title.module.css'

const Title =({text}) =>{
   return (
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>{text}</h1>
        </div>
    )

}
export default Title;