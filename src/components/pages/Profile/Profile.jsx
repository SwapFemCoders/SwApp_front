import SidebarMenu from "../../organisms/SidebarMenu/SidebarMenu";
import Title from "../../atoms/title/Title";
import styles from './profile.module.css';
import ArticleList from "../../organisms/ArticleList/ArticleList";
import Footer from "../../atoms/Footer/Footer";
import { FullBackground } from "../../atoms/FullBackground/FullBackground";

export const Profile = () => {
    return (
    <>
    <FullBackground 
        content={
        
        <SidebarMenu/>}/> 
    {/* <main className={styles.profileContainer}>
        <div className={styles.comicDivider}></div>
        
        <SidebarMenu/>
        <section className="styles.content">
            <ArticleList/>
        </section>
        
    
    </main> */}
    <Footer/>
    </>
    )
}
