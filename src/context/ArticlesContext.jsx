import { createContext, useState } from "react";
import ArticlesPath from "../services/ArticlesPath";

const ArticlesContext = createContext(ArticlesPath);

export const ArticlesProvider=({ children })=> {

    const [articles, setArticles] = useState([]);
    const articlesService = ArticlesPath();

    const [isModalOpen, setIsModalOpen] = useState (false);

    const openAuthModal = () => setIsModalOpen(true);
    const closeAuthModal = () => setIsModalOpen(false);

    const createArticle = async (formData) => {
        const newArticle = await articlesService.createArticle(formData);
        setArticles(prev => [...prev, newArticle]);
    };

  return (
    <ArticlesContext.Provider value={{ articles, createArticle }}>
      {children}
    </ArticlesContext.Provider>
  );
}

export default ArticlesContext;
