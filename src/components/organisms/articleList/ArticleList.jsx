import { useState } from "react";
import styles from './article-list.module.css';
import ArticlesPath from "../../../services/ArticlesPath";
import ArticleCard from "../../molecules/ArticleCard/ArticleCard";
import ArticleDetails from "../../molecules/articleDetails/ArticleDetails";

const ArticleList = ({ articles }) =>{
    const[selectedArticle, setSelectedArticle] = useState(null); 

    const handleOpenDetails = async(id) => {
    try{
        const details = await ArticlesPath().getArticleById(id);
        setSelectedArticle(details);
    } catch (error){
        console.error("error charging details", error);
    }
    };
        
    return(
        <>
        {articles && articles.length >0?(
            <section>
                <div className = {styles.card_grid}>
                    {articles.map((item) => (
                        <ArticleCard
                            key={item.id}
                            title={item.title}
                            imageSrc={item.picture}
                            onAction = {() => handleOpenDetails(item.id)}
                        />
                    ))}
                </div>
            </section>
        ):(
            <section className = {styles.no_cards}>
                <p>Upss! there are no articles at the moment!</p>
            </section>
        )}
        {selectedArticle && (
            <ArticleDetails
                article= {selectedArticle}
                onClose={() => setSelectedArticle(null)}
                />
        )}
        </>
    );
};
export default ArticleList;

