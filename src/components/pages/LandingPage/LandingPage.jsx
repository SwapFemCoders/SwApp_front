import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import Mascot from "../../atoms/Mascot/Mascot";
import style from "./LandingPage.module.css";
import RepeatingSection from "../../templates/RepeatingSection/RepeatingSection";
import { SecondSectionLanding } from "../../organisms/SecondSectionLanding/SecondSectionLanding";
import Footer from "../../atoms/Footer/Footer";

const LandingPage = () => (
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
);

export default LandingPage;