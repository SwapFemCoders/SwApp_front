import axios from "axios";

const ArticlesPath =() =>{
    const url = "http://localhost:8080/api/v1/articles";

    const getAllArticles = async() =>{
        try{
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error ("Error to obtains articles", error);
            throw error;
        }
    }

    const getArticleById = async(id) =>{
        try{
            const response = await axios.get(`${url}/${id}`);
            return response.data;
        } catch (error) {
            console.error ("Error to obtains article details", error);
            throw error;
        }
    }

    const reserveArticle = async (articleId) => {
        const token = localStorage.getItem("token");
          try {
    const response = await axios.post(
        `${url}/reserve/${articleId}`, 
        {},
        {
                headers: {
                    'Authorization': `Bearer ${token}` 
                }
            }
        );
         return response.data;
         } catch (error) {
        console.error("Error reserving item", error);
        throw error;
         }
    }

    


return{ getAllArticles, getArticleById, reserveArticle}

}
export default ArticlesPath;