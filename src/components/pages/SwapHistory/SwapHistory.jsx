import { useEffect, useState } from 'react';
import styles from './swap-history.module.css';
import ArticleList from '../../organisms/ArticleList/ArticleList';
import ArticlesPath from '../../../services/ArticlesPath';
const SwapHistory = () => {

  const [list, setList] = useState([]);

  useEffect(()=>{
    ArticlesPath().getAllReservedArticles().then(data => setList(data));
    },[]);

  return (
    <section className={styles.content}>
                <ArticleList articles={list}/>
            </section>
  );

}

export default SwapHistory;