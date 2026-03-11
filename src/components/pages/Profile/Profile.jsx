import SidebarMenu from "../../organisms/SidebarMenu/SidebarMenu";
import Shop from "../Shop/Shop";
import Footer from "../../atoms/Footer/Footer";
import { FullBackground } from "../../atoms/FullBackground/FullBackground";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "../../templates/Dashboard/DashboardLayout";


export const Profile = () => {
    return (
    <>
    
    <FullBackground 
        content={
            <DashboardLayout/>
        }
    /> 
    <Footer/>
    </>
    )
}
