import { useState } from 'react'
import TitleBox from "../../atoms/titleBox/TitleBox"
import style from "./SignUpForm.module.css"
import UserPath from '../../../services/UserPath';
import {DataProtection} from "../../atoms/DataProtection/DataProtection.jsx"
import ActionButton from '../../atoms/actionButton/ActionButton.jsx';
import Logo from '../../../assets/images/Logo.png';
import { useNavigate } from 'react-router';
import Popup from '../../molecules/PopUp/PopUp.jsx';


export const SignUpForm = () => {

    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    const [form, setForm] = useState({
        name: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        location: "",
        picture: ""
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        if (errors[event.target.name]) {
        setErrors({
            ...errors,
            [event.target.name]: ""
        });
    }
};

    const handleSubmit = async(event) => {
        event.preventDefault()

        if (!validateForm()) {
        return;
        }

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
        setPopupMessage("User successfully created!");
        setShowPopup(true);
        handleCancel();

    } catch (error) {
        console.error("Signup failed:", error);
        setPopupMessage("Error creating user");
        setShowPopup(true);
    }
    };

    const closePopup = () => {
    setShowPopup(false);

    if (popupMessage === "User successfully created!") {
        navigate("/LogIn");
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
        picture: ""
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
    const [errors, setErrors] = useState({});
    
    const validForm = 
    form.name !=="" &&
    form.lastName !=="" &&
    form.userName !=="" &&
    form.email !=="" &&
    form.password !=="" &&
    form.location !=="" &&
    acceptedDataProtection;

    const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) {
        newErrors.name = "Name is required";
    }
    if (!form.email.includes("@")) {
        newErrors.email = "Invalid email";
    }
    if (form.password.length < 6) {
        newErrors.password = "Must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
};

    return (
    <>
        <section className={style.content}>
            <div className={style.title}>
                <TitleBox text="SIGN UP"/>
            </div>
            {showPopup && (
            <Popup title="Thank you!" onClose={closePopup}>{popupMessage}</Popup>
            )}
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
                
                <div className={style.field}>
                    <label htmlFor="email" className={style.label}>Email</label>
                    <div className={style.inputContainer}>
                        {errors.email && (<span className={style.errorFloating}>{errors.email}</span>)}
                        <input className={`${style.input} ${errors.email ? style.inputError : ""}`} type="text" name='email' id="email" autoComplete='off' value={form.email} onChange={handleChange} required/>
                    </div>
                </div>

                <div className={style.field}>
                    <label htmlFor="password" className={style.label}>Password</label>
                    <div className={style.inputContainer}>
                    {errors.password && (<p className={style.errorFloating}>{errors.password}</p>)}
                    <input className={`${style.input} ${errors.password ? style.inputError : ""}`} type="password" name='password' id="password" autoComplete='off' value={form.password} onChange={handleChange} required/>
                    </div>
                </div>
                <div>
                    <label htmlFor="location" className={style.label}>Location</label>
                    <input className={style.input} type="text" name='location' id="location" autoComplete='off' value={form.location} onChange={handleChange} required/>
                </div>
                <div className={style.picture}>
                    <div>
                        <label htmlFor="picture" className={style.label}>Picture</label>
                        <input type="file" name='picture' id="picture" hidden onChange={handleFileChange} autoComplete='off'/>
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
                </section>
            </form>
        </section>
    </>
    
    )

    };


