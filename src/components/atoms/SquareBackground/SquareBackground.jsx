import style from "./squareBackground.module.css"

export const SquareBackground = ({content, color}) => {
    return (
        <>
        <div className={style.background} style={{"--frame-color":color}}>
        <div className={style.comicDivider}></div>
            {content}
        </div>
    </>
    )
}
