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
        </div>
    </>
);

export default Page;