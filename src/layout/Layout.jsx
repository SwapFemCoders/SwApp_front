import { Outlet } from 'react-router';
import React, { useState } from 'react';
import style from "./Layout.module.css"
import PageTemplate from '../components/templates/PageTemplate/PageTemplate';
import Footer from "../../src/components/atoms/Footer/Footer.jsx";
import UserProvider from '../context/User/UserProvider.jsx';

export function Layout() {

    const [loggedIn, setLoggedIn] = useState(
    !!localStorage.getItem("token")
);
return (
    <>
        <UserProvider>
            <header className={style.pageTemplate}>
                <PageTemplate/>
            </header>
            <section className={style.outlet}>
                <Outlet/>
            </section>
        </UserProvider>
        
    </>
);
}
