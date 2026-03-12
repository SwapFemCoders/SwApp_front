import axios from "axios";
import api from './api';

const ArticlesPath =() =>{
    const url = "/api/v1/articles";

    const createArticle = async (formData) => {
        try{
            const response = await api.post(url, formData);
            return response.data;
        } catch(error){
            console.error ("Error to create new article", error);
            throw error;
        }
    };

    const getAllArticles = async() =>{
        try{
            const response = await api.get(url);
            return response.data;
        } catch (error) {
            console.error ("Error to obtains articles", error);
            throw error;
        }
    }

    const getArticleById = async(id) =>{
        try{
            const response = await api.get(`${url}/${id}`);
            return response.data;
        } catch (error) {
            console.error ("Error to obtains article details", error);
            throw error;
        }
    }

    const getAllAvailableArticlesByCreatorId = async() =>{
        try{
            const response = await api.get(`${url}/user/available`);
            return response.data;
        } catch (error) {
            console.error ("Error to obtains available articles", error);
            throw error;
        }
    }

     const getAllReservedArticles = async() =>{
        try{
            const response = await api.get(`${url}/reserved`);
            return response.data;
        } catch (error) {
            console.error ("Error to obtains reserved articles", error);
            throw error;
        }
    }

    const reserveArticle = async (articleId) => {
  
    try {
        const response = await api.put(
        `${url}/${articleId}/reserve`,{}); 
        return response.data;
        } catch (error) {
        console.error("Error reserving item", error);
        throw error;
        }
    }

    const deleteArticle = async(articleId) => {
        try{
            const response = await api. delete(`${url}/${articleId}`);
            return response.data;
        } catch(error){
            console.error ("Error deleting article", error);
            throw error;
        }
    }
return{ getAllArticles, getArticleById, 
    createArticle, reserveArticle,
getAllAvailableArticlesByCreatorId,
getAllReservedArticles,
deleteArticle}
    
}
export default ArticlesPath;