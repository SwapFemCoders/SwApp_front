import Footer from "../../atoms/Footer/Footer";
import { FullBackground } from "../../atoms/FullBackground/FullBackground";
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
