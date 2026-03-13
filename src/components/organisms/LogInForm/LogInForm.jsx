import React, { useState, useContext } from 'react'
import style from "./LogInForm.module.css"
import TitleBox from '../../atoms/titleBox/TitleBox';
import ActionButton from '../../atoms/actionButton/ActionButton';
import {UserContext} from "../../../context/User/UserContext";
import { useNavigate } from "react-router";

export const LogInForm = () => {

    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({
    userName: "",
    password: ""
    });

    const handleChange = (event) => {
    setForm({
    ...form,
    [event.target.name]: event.target.value
    });
    };

    const handleSubmit = async(event) => {
    event.preventDefault();
    try {
    const response = await login(form);
    console.log("User logged in:", response);
    navigate("/Shop");
    } catch (error) {
    console.error("Login failed:", error);
    
    }
    };

        const handleCancel = () => {
    setForm({
        userName: "",
        password: "",
    });
    };

    const validForm = 
    form.userName !=="" &&
    form.password !=="";

    return (
    <>
        <section className={style.content}>
            <div className={style.title}>
                <TitleBox text="LOG IN"/>
            </div>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.userName}>
                    <label htmlFor="userName" className={style.label}>Username</label>
                    <input className={style.input} type="text" name='userName' id="userName" autoComplete='on' value={form.userName}
                    onChange={handleChange} required/>
                </div>
                <div className={style.password}>
                    <label htmlFor="password" className={style.label}>Password</label>
                    <input className={style.input} type="password" name='password' id="password" autoComplete='on' value={form.password}
                    onChange={handleChange} required/>
                </div>
                <div className={style.noCuenta}>
                <p>No tienes cuenta ? </p><a href="/SignUp">Sign Up</a> 
                </div>
            
            <section className={style.buttonSection}>
                <ActionButton  className="login" type="submit" disabled={!validForm} text={"LOG IN"}/>
                <ActionButton className="login" type="button" text={"CANCEL"} onClick={handleCancel}/>
            </section>

        </form>
        </section>
    </>
    )
};
