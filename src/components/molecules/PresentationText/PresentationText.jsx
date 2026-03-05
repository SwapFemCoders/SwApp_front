import React from 'react'
import style from "./PresentationText.module.css"
import TitleBox from '../../atoms/titleBox/TitleBox.jsx'

export const PresentationText = () => {
    return (
    <>
        <p className={style.title}>Sustainable </p>
        <div className={style.box}>
            <TitleBox text="Fashion"/>
        </div>
        <p className={style.title}> Exchange</p>
        <p className={style.text}>Welcome to SWAPP, the platform to exchange second hand clothes. <br/>
                                Using a points system, it's easy and interactive. <br/>
                                Our goal is to promote conscious consumption and reduce textile waste that negatively impacts our planet. <br/>
                                Join the community that makes a difference and be part of the change!</p>
    </>
    )
}
