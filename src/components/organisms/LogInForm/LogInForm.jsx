import React from 'react'
import style from "./LogInForm.module.css"
import TitleBox from '../../atoms/titleBox/TitleBox';

export const LogInForm = () => {
    return (
    <>
        <section className={style.content}>
            <div className={style.title}>
                <TitleBox text="LOG IN"/>
            </div>
            <form className={style.form}>
                <div className={style.userName}>
                    {/* VALIDATION OF THE USERNAME - NEED TO BE UNIQUE - CHECK THE API */}
                    <label htmlFor="username" className={style.label}>Username</label>
                    <input className={style.input} type="text" name='username' id="username" autoComplete='off' required/>
                </div>
                <div className={style.password}>
                    <label htmlFor="password" className={style.label}>Password</label>
                    <input className={style.input} type="password" name='password' id="password" autoComplete='off' required/>
                </div>
            </form>
        </section>
        <section className={style.buttonSection}>
            <button  className={style.button} type="submit">LOG IN</button>
            <button  className={style.button} >CANCEL</button>
        </section>
    </>
    )
};
