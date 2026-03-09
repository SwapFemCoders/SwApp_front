import style from "./fullBackground.module.css"

export const FullBackground = ({content}) => {
    return (
        <>
        <div className={style.background}>
        <div className={style.comicDivider}></div>
            {content}
        </div>
    </>
    )
}