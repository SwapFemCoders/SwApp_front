import axios from "axios";

const ArticlesPath =() =>{
    const url = "http://localhost:8080/api/v1/articles";

    const createArticle = async (formData) => {
        try{
            const response = await axios.post(url, {
                method: "POST",
                body: formData
            });
            return await response.json();
        } catch(error){
            console.error ("Error to create new article", error);
            throw error;
        }
    };

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

return{ getAllArticles, getArticleById, createArticle}

}
export default ArticlesPath;