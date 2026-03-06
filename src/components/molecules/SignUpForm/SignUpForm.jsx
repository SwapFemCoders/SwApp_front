import React, { useState } from 'react'
import TitleBox from "../../atoms/titleBox/TitleBox"
import style from "./SignUpForm.module.css"
import { Form } from 'react-router'

export const SignUpForm = () => {

    const [form, setForm] = useState({name:"", LastName:"", Username:"", Email:"", Location:"", ProfilePicture:""});

    return (
    <>
        <h1 className={style.title}>
            <TitleBox text="SIGN UP"/>
        </h1>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name='Name' id="Name"/>
            </div>
            <div>
                <label htmlFor="name">Lastname</label>
                <input type="text" name='Lastname' id="Lastname"/>
            </div>
            <div>
                <label htmlFor="name">UserName</label>
                <input type="text" name='UserName' id="UserName"/>
            </div>
            <div>
                <label htmlFor="name">Email</label>
                <input type="text" name='Email' id="Email"/>
            </div>
            <div>
                <label htmlFor="name">Location</label>
                <input type="text" name='Location' id="Location"/>
            </div>
            <div>
                <label htmlFor="name">Profile Picture</label>
                <input type="text" name='Profile Picture' id="Profile Picture"/>
            </div>
            <button type="submit">SIGN UP</button>
        </form>
    </>
    
    )
}
