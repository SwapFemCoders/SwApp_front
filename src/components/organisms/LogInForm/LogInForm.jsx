import React, { useState } from 'react'
import style from "./LogInForm.module.css"
import TitleBox from '../../atoms/titleBox/TitleBox';

export const LogInForm = () => {

    const [form, setForm] = useState({
    username: "",
    password: ""
    });

    const handleChange = (e) => {
    setForm({
    ...form,
    [e.target.name]: e.target.value
    });
    };

    const handleSubmit = async(event) => {
    event.preventDefault();
    try {
    const response = await UserService.login(form);
    console.log("User logged in:", response);
    localStorage.setItem("token", response.token); //token local storage for logIn persistence...do we keep it ?
    setLoggedIn(true);

    } catch (error) {
    console.error("Login failed:", error);
    }


    };

    return (
    <>
        <section className={style.content}>
            <div className={style.title}>
                <TitleBox text="LOG IN"/>
            </div>
            <form className={style.form}>
                <div className={style.userName}>
                    <label htmlFor="username" className={style.label}>Username</label>
                    <input className={style.input} type="text" name='username' id="username" autoComplete='off' value={form.email}
                    onChange={handleChange} required/>
                </div>
                <div className={style.password}>
                    <label htmlFor="password" className={style.label}>Password</label>
                    <input className={style.input} type="password" name='password' id="password" autoComplete='off' value={form.password}
                    onChange={handleChange} required/>
                </div>
            
            <section className={style.buttonSection}>
                <button  className={style.button} type="submit" onClick={handleSubmit}>LOG IN</button>
                <button  className={style.button} >CANCEL</button>
            </section>

        </form>
        </section>
    </>
    )
};
