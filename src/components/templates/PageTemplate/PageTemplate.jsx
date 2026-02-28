import Navbar from "../../molecules/Navbar/Navbar";
import style from "./PageTemplate.module.css";

const Page = () => (
    <>
        <div className={style.body}>
            <div className={style.navbar}>
                <Navbar/>
            </div>
        </div>
    </>
);

export default Page;