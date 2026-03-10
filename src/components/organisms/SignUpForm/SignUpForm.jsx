import React, { useState } from 'react'
import TitleBox from "../../atoms/titleBox/TitleBox"
import style from "./SignUpForm.module.css"
import UserPath from '../../../services/UserPath';
import {DataProtection} from "../../atoms/DataProtection/DataProtection.jsx"
import ActionButton from '../../atoms/actionButton/ActionButton.jsx';
import Logo from '../../../assets/images/Logo.png';

export const SignUpForm = () => {

    const [form, setForm] = useState({
        name: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
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

        const user={
            name: form.name,
            lastName: form.lastName,
            userName: form.userName,
            email: form.email,
            password: form.password,
            location: form.location
        };
        data.append("user", new Blob([JSON.stringify(user)], { type: "application/json" })
        );
        if (form.picture) {
            data.append("file", form.picture);
        } else {
            const response = await fetch(Logo);
            const blob = await response.blob();

            data.append("file", blob, "Logo.png");
        }
        
        const response = await UserPath().createUser(data);
        
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
        userName: "",
        email: "",
        password: "",
        location: "",
        picture: null
    });
        setfileName("");
        setAcceptedDataProtection(false);
    };

    const [fileName, setfileName] = useState(" ");

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setfileName(file.name);
            setForm({
        ...form,
        picture: file
        });
    }
    };

    const [acceptedDataProtection, setAcceptedDataProtection] = useState(false);

    const validForm = 
    form.name !=="" &&
    form.lastname !=="" &&
    form.username !=="" &&
    form.email !=="" &&
    form.password !=="" &&
    form.location !=="" &&
    acceptedDataProtection;

    return (
    <>
        <section className={style.content}>
            <div className={style.title}>
                <TitleBox text="SIGN UP"/>
            </div>
            <form className={style.form} onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className={style.label}>Name</label>
                    <input className={style.input} type="text" name='name' id="name" autoComplete='off' value={form.name} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="lastName" className={style.label}>Lastname</label>
                    <input className={style.input} type="text" name='lastName' id="lastName" autoComplete='off' value={form.lastName} onChange={handleChange} required/>
                </div>
                <div>
                    {/* VALIDATION OF THE USERNAME - NEED TO BE UNIQUE - CHECK THE API */}
                    <label htmlFor="userName" className={style.label}>UserName</label>
                    <input className={style.input} type="text" name='userName' id="userName" autoComplete='off' value={form.userName} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="email" className={style.label}>Email</label>
                    <input className={style.input} type="text" name='email' id="email" autoComplete='off' value={form.email} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="password" className={style.label}>Password</label>
                    <input className={style.input} type="password" name='password' id="password" autoComplete='off' value={form.password} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="location" className={style.label}>Location</label>
                    <input className={style.input} type="text" name='location' id="location" autoComplete='off' value={form.location} onChange={handleChange} required/>
                </div>
                <div className={style.picture}>
                    <div>
                        <label htmlFor="picture" className={style.label}>Picture</label>
                        <input type="file" name='picture' id="picture" hidden onChange={handleFileChange} value={form.picture} autoComplete='off'/>
                    </div>
                    <div className={style.uploadButton}>
                        <label htmlFor="picture" className={style.pictureButton}>UPLOAD</label>
                        <span className={style.file}>{fileName}</span>
                    </div>
                </div>
                <DataProtection
                checked={acceptedDataProtection}
                onChange={(event) => setAcceptedDataProtection(event.target.checked)}/>

                <section className={style.buttonSection}>
                    <ActionButton  className="login" type="submit" disabled={!validForm} text={"SIGN UP"}/>
                    <ActionButton className="login" type="button" text={"CANCEL"} onClick={handleCancel}/>
                    {/* <button className={style.button} type="submit" disabled={!validForm}>SIGN UP</button>
                    <button className={style.button} >CANCEL</button> */}
                </section>
            </form>
        </section>
    </>
    
    )

    console.log(form);
    };


