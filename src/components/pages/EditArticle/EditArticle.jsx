import ArticleForm from "../../organisms/ArticleForm/ArticleForm";
import {SquareBackground} from "../../atoms/SquareBackground/SquareBackground";
import { useParams } from "react-router";

const EditArticle = () => {
  const { id } = useParams();
  return (
    <>
      <SquareBackground color="#f7d51d" content={<ArticleForm articleId={id} isEdit={true}/>}/> 
    </>
  );

}

export default EditArticle;