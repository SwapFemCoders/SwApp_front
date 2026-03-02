import Page from "../../templates/PageTemplate/PageTemplate";
import Mascot from "../../atoms/Mascot/Mascot";
import style from "./LandingPage.module.css";

const LandingPage = () => (
    <>
        <div>
            <Page/>
        </div>
        <div className={style.mascot}>
            <Mascot/>
        </div>
    </>
);

export default LandingPage;