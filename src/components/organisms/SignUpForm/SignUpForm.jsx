import React, { useState } from 'react'
import TitleBox from "../../atoms/titleBox/TitleBox"
import style from "./SignUpForm.module.css"
import { Form } from 'react-router'
import setUsers, { Users } from '../Users/Users'

export const SignUpForm = () => {

    const [form, setForm] = useState({name:"",
                                    LastName:"", 
                                    Username:"", 
                                    Email:"", 
                                    Location:"", 
                                    picture:null});

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
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
        const response = await UserService.createUser(data);

        console.log("User created:", response);

        alert("User successfully created!");

        handleCancel();
    } catch (error) {
        console.error("Signup failed:", error);
        alert("Error creating user");
    }
    };

    };

    const handleCancel = () => {
    setFormData({
        name: "",
        lastname: "",
        username: "",
        email: "",
        location: "",
        picture: null,
    });
    };

    return (
    <>
        <h1 className={style.title}>
            <TitleBox text="SIGN UP"/>
        </h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" name='Name' id="Name" onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="name">Lastname</label>
                <input type="text" name='Lastname' id="Lastname"  onChange={handleChange} required/>
            </div>
            <div>
                {/* VALIDATION OF THE USERNAME - NEED TO BE UNIQUE - CHECK THE API */}
                <label htmlFor="name">UserName</label>
                <input type="text" name='UserName' id="UserName"  onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="name">Email</label>
                <input type="text" name='Email' id="Email"  onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="name">Location</label>
                <input type="text" name='Location' id="Location"  onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="name">Profile Picture</label>
                <input type="text" name='picture' id="picture"  onChange={handleChange} required/>
            </div>
            <button type="submit">SIGN UP</button>
        </form>
    </>
    
    )

