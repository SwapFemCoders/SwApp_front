import styles from './TitleBox.module.css'

const TitleBox =({text}) =>{
    return(
        <>
            <h1 className = {styles.title}>{text}</h1>
        </>
    )

}
export default TitleBox;