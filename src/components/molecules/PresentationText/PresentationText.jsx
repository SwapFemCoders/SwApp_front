import React from 'react'
import style from "./PresentationText.module.css"

export const PresentationText = () => {
    return (
    <>
    <h1 className={style.title}>Sustainable Fashion Exchange</h1>
    <p className={style.text}>Welcome to SWAPP, the platform to exchange second hand clothes. <br/>
                            Using a points system, it's easy and interactive. <br/>
                            Our goal is to promote conscious consumption and reduce textile waste that negatively impacts our planet. <br/>
                            Join the community that makes a difference and be part of the change!</p>
    </>
    )
}
