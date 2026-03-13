import { useEffect, useState } from 'react';
import styles from './my-swaps.module.css';
import ArticleList from '../../organisms/ArticleList/ArticleList';
import ArticlesPath from '../../../services/ArticlesPath';

const MySwaps = () => {
  const [list, setList] = useState([]);

  useEffect(()=>{
    ArticlesPath().getAllAvailableArticlesByCreatorId().then(data => setList(data));
    },[]);

  return (
    <section className={styles.content}>
                <ArticleList articles={list}/>
            </section>
  );

}

export default MySwaps;