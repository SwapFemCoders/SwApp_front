import style from "./RedBackground.module.css"

export const RedBackground = ({content, color}) => {
    return (
    <>
    <div className={style.background} style={{"--frame-color":color}}>
        <div className={style.comicDivider}></div>
        {content}
    </div>
    </>


    )
}
