import SidebarMenu from "../../organisms/SidebarMenu/SidebarMenu";
import Title from "../../atoms/title/Title";
import styles from './profile.module.css';
import ArticleList from "../../organisms/ArticleList/ArticleList";
import Footer from "../../atoms/Footer/Footer";
import { RedBackground } from "../../atoms/RedBackground/RedBackground";

export const Profile = () => {
    return (
    <>
    <RedBackground color={"#c8403c"} content={<SidebarMenu/>}/>
    {/*<main className={styles.profileContainer}>
        <div className={styles.comicDivider}></div>
        <Title text="Welcome to Shop"/>
        <SidebarMenu/>
        <section className="styles.content">
            <ArticleList/>
        </section>
        
    
    </main>*/}
    <Footer/>
    </>
    )
}
