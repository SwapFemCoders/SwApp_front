import { Outlet } from 'react-router';
import style from "./Layout.module.css"
import PageTemplate from '../components/templates/PageTemplate/PageTemplate';

export const Layout = () => (
    <>
        <div className={style.pageTemplate}>
                <PageTemplate/>
        </div>
        <section className={style.outlet}>
                <Outlet/>
        </section>
    </>
);
