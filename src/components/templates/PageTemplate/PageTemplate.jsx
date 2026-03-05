import FlyingSwapp from "../../atoms/FlyingSwapp/FlyingSwapp";
import Logo from "../../atoms/Logo/Logo";
import Mascot from "../../atoms/Mascot/Mascot";
import Navbar from "../../molecules/Navbar/Navbar";
import { Header } from "../../organisms/Header/Header";
import RepeatingSection from "../RepeatingSection/RepeatingSection";
import style from "./PageTemplate.module.css";

const PageTemplate = () => (
    <>
        <section className={style.body}>
            <div className={style.header}>
                <Header/>
            </div>
            <div className={style.repeatingSection}>
                <RepeatingSection/>
            </div>
        </section>
    </>
);

export default PageTemplate;