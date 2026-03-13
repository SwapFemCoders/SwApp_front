import Mascot from "../../atoms/Mascot/Mascot";
import style from "./LandingPage.module.css";
import { SecondSectionLanding } from "../../organisms/SecondSectionLanding/SecondSectionLanding";
import Footer from "../../atoms/Footer/Footer";
import { useContext } from "react";
import { UserContext } from "../../../context/User/UserContext";

const LandingPage = () => {
    const user = useContext(UserContext);
    return(
    <div className={style.page}>
        <section className={style.section1}>
                <div className={style.mascot}>
                    <Mascot/>
                </div>
        </section>
        <section className={style.section2}>
            <SecondSectionLanding/>
        </section>
        <Footer/>
    </div>
    ) 
};

export default LandingPage;