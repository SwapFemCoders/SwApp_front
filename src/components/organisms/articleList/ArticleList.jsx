import { useEffect, useState } from "react";
import styles from './article-list.module.css';
import ArticlesPath from "../../../services/ArticlesPath";
import MockArticles from "../../../assets/Mocks/MockArticles";
import ArticleCard from "../../molecules/ArticleCard/ArticleCard";
import ArticleDetails from "../../molecules/articleDetails/ArticleDetails";

const ArticleList = () =>{
    const [list, setList] = useState([]);
    const[selectedArticle, setSelectedArticle] = useState(null); 

    useEffect(()=>{
    //setList(MockArticles);
        ArticlesPath().getAllArticles().then(data =>{setList(data)});
    }, []);

    const handleOpenDetails = async(id) => {
    try{
      // const details = MockArticles.find(article => article.id === id);
        const details = await ArticlesPath().getArticleById(id);
        setSelectedArticle(details);
    } catch (error){
        console.error("error charging details", error);
    }
    };
    
    return(
        <>
        {list && list.length >0?(
            <section>
                <div className = {styles.card_grid}>
                    {list.map((item) => (
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

