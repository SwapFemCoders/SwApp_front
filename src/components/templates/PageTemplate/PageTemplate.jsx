import FlyingSwapp from "../../atoms/FlyingSwapp/FlyingSwapp";
import Logo from "../../atoms/Logo/Logo";
import Navbar from "../../molecules/Navbar/Navbar";
import style from "./PageTemplate.module.css";

const Page = () => (
    <>
        <div className={style.body}>
            <div className={style.logo}>
                <Logo/>
            </div>
            <div className={style.navbar}>
                <Navbar/>
            </div>
            <FlyingSwapp/>
        </div>
    </>
);

export default Page;