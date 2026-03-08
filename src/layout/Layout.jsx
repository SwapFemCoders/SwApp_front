import { Outlet } from 'react-router';
import style from "./Layout.module.css"
import PageTemplate from '../components/templates/PageTemplate/PageTemplate';

export const Layout = () => (
    <>
        <header className={style.pageTemplate}>
                <PageTemplate/>
        </header>
        <section className={style.outlet}>
                <Outlet/>
        </section>
    </>
);
