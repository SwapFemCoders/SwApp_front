const CreateArticle = () => {

  return (
    <div>Create Article</div>
  );

}

export default CreateArticle;


//import { useState, useContext } from "react";
//import { ArticlesContext } from "../../../context/ArticlesContext";
//import styles from "./ArticleForm.module.css";

/*export default function ArticleForm() {

  const { addArticle } = useContext(ArticlesContext);

  const [form, setForm] = useState({
    title:"",
    description:"",
    creationDate:"",
    state:"",
    category:"",
    user:"",
    image:null
  });

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleImage = (e)=>{
    setForm({
      ...form,
      image: URL.createObjectURL(e.target.files[0])
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    addArticle(form);
  };

  return (

    <form className={styles.form} onSubmit={handleSubmit}>

      <label>Upload article</label>
      <input type="file" onChange={handleImage}/>

      <label>Title</label>
      <input name="title" onChange={handleChange}/>

      <label>Description</label>
      <textarea name="description" onChange={handleChange}/>

      <label>Creation date</label>
      <input type="date" name="creationDate" onChange={handleChange}/>

      <label>State</label>
      <select name="state" onChange={handleChange}>
        <option>New</option>
        <option>Used</option>
      </select>

      <label>Category</label>
      <select name="category" onChange={handleChange}>
        <option>Clothes</option>
        <option>Electronics</option>
      </select>

      <label>User</label>
      <input name="user" onChange={handleChange}/>

      <div className={styles.buttons}>
        <button type="submit">SUBMIT ARTICLE</button>
        <button type="reset">CANCEL</button>
      </div>

    </form>
  );
}*/