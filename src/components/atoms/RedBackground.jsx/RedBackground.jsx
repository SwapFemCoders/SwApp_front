import React from 'react'
import style from "./RedBackground.module.css"

export const RedBackground = ({content}) => {
    return (
    // <div>
    //     <img src="../src/assets/images/RedBackground.png" alt="" className={style.background}/>
    // </div>
    <>
    <div className={style.background}>
        <div className={style.comicDivider}></div>
        {content}
    </div>
    </>


    )
}
