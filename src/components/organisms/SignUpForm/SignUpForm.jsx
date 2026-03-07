import React, { useState } from 'react'
import TitleBox from "../../atoms/titleBox/TitleBox"
import style from "./SignUpForm.module.css"
import UserPath from '../../../services/UserPath';

export const SignUpForm = () => {

    const [form, setForm] = useState({
        name: "",
        lastName: "",
        username: "",
        email: "",
        location: "",
        picture: null
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.files 
            ? event.target.files[0] 
            : event.target.value
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        try {
        const data = new FormData();
        data.append("name", form.name);
        data.append("lastname", form.lastname);
        data.append("username", form.username);
        data.append("email", form.email);
        data.append("location", form.location);
        if (form.picture) {
        data.append("picture", form.picture);
        }
        const response = await UserPath.createUser(data);
        console.log("User created:", response);
        alert("User successfully created!");
        handleCancel();

    } catch (error) {
        console.error("Signup failed:", error);
        alert("Error creating user");
    }
    };

    const handleCancel = () => {
    setForm({
        name: "",
        lastName: "",
        username: "",
        email: "",
        location: "",
        picture: null
    });
    };

    const [fileName, setfileName] = useState(" ");

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setfileName(file.name);
        }
    };

    return (
    <>
        <section className={style.content}>
            <div className={style.title}>
                <TitleBox text="SIGN UP"/>
            </div>
            <form className={style.form} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className={style.label}>Name</label>
                    <input className={style.input} type="text" name='name' id="name" autoComplete='off' onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="lastname" className={style.label}>Lastname</label>
                    <input className={style.input} type="text" name='lastname' id="lastname" autoComplete='off' onChange={handleChange} required/>
                </div>
                <div>
                    {/* VALIDATION OF THE USERNAME - NEED TO BE UNIQUE - CHECK THE API */}
                    <label htmlFor="userName" className={style.label}>UserName</label>
                    <input className={style.input} type="text" name='userName' id="userName" autoComplete='off' onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="email" className={style.label}>Email</label>
                    <input className={style.input} type="text" name='email' id="email" autoComplete='off' onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="password" className={style.label}>Password</label>
                    <input className={style.input} type="password" name='password' id="password" autoComplete='off' onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="name" className={style.label}>Location</label>
                    <input className={style.input} type="text" name='location' id="location" autoComplete='off' onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="picture" className={style.label}>Picture</label>
                    <input type="file" name='picture' id="picture" hidden onChange={handleFileChange} autoComplete='off'/>
                    <label htmlFor="picture" className={style.pictureButton}>UPLOAD</label>
                    <span className={style.file}>{fileName}</span>
                </div>

                <section className={style.buttonSection}>
                    <button  className={style.button} type="submit">SIGN UP</button>
                    <button  className={style.button} >CANCEL</button>
                </section>
            </form>
        </section>
    </>
    
    )

    console.log(form);
    };


