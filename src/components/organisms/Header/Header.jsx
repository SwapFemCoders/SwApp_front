import React from 'react'
import Logo from '../../atoms/Logo/Logo'
import Navbar from '../../molecules/Navbar/Navbar'
import style from "./Header.module.css"

export const Header = () => {
    return (
    <div className={style.header}>
        <div className={style.logo}>
            <Logo/>
        </div>
        <div className={style.navbar}>
            <Navbar/>
        </div>
    </div>
    )
}
