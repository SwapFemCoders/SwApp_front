import ArticleForm from "../../organisms/ArticleForm/ArticleForm";
import {SquareBackground} from "../../atoms/SquareBackground/SquareBackground";
import style from "../CreateArticle/createArticle.module.css"

const CreateArticle = () => {

  return (
    <>
      <SquareBackground color="#f7d51d" content={<ArticleForm/>}/> 
    </>
  );

}

export default CreateArticle;