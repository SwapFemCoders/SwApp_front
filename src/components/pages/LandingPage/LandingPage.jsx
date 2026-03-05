import PageTemplate from "../../templates/PageTemplate/PageTemplate";
import Mascot from "../../atoms/Mascot/Mascot";
import style from "./LandingPage.module.css";
import RepeatingSection from "../../templates/RepeatingSection/RepeatingSection";
import { SecondSectionLanding } from "../../organisms/SecondSectionLanding/SecondSectionLanding";

const LandingPage = () => (
    <>
        <div className={style.repeatingSection}>
            <RepeatingSection/>
        </div>
        
        <section className={style.section1}>
                <div className={style.pageTemplate}>
                    <PageTemplate/>
                </div>
                <div className={style.mascot}>
                    <Mascot/>
                </div>
        </section>
        
        <section className={style.section2}>
            <SecondSectionLanding/>
        </section>
    </>
);

export default LandingPage;