import { useContext, useState } from "react";
import ArticlesContext from "../../../context/ArticlesContext";
import styles from "./articleForm.module.css";
import Title from "../../atoms/title/Title";
import ActionButton from "../../atoms/actionButton/ActionButton";
import ArticlesPath from '../../../services/ArticlesPath';
import Popup from '../../molecules/PopUp/PopUp.jsx';

const ArticleForm = () => {
  const { createArticle } = useContext(ArticlesContext);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    state: "",
    category: "",
    picture: ""
  });

  const [picture, setPicture] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      const article={
        title: form.title,
        description: form.description,
        date: form.date,
        state: form.state,
        category: form.category,
      };
      formData.append("article", new Blob([JSON.stringify(article)], { type: "application/json" })
        );
      formData.append("file", form.picture);

      const response = await ArticlesPath().createArticle(formData);

      console.log("Article created successfully", response);
        setPopupMessage("Article created successfully");
        setShowPopup(true);
        handleCancel();
      }

      catch (error) {
      console.error("New Article failed:", error);
      setPopupMessage("Error creating article");
      setShowPopup(true);
    }
  };
  
  const closePopup = () => {
    setShowPopup(false);

    if (popupMessage === "User successfully created!") {
        navigate("/LogIn");
    }
};

  const handleCancel = () => {
    setForm({
      title: "",
      description: "",
      date: "",
      state: "",
      category: "",
      picture: ""
    });
    setfileName("");
    setPicture(null);
    
  };
  const [fileName, setfileName] = useState(" ");

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            setfileName(file.name);
            setForm({
        ...form,
        picture: file
        });
    }
    };

  const validForm =
    form.title !== "" &&
    form.description !== "" &&
    form.date !== "" &&
    form.state !== "" &&
    form.category !== "" &&
    !!form.picture;

  return (
    <>
      <section className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Title text="New Article" />
          {showPopup && (
            <Popup title="Well done!" onClose={closePopup}>{popupMessage}</Popup>
            )}
          <div>
            <label htmlFor="name" className={styles.label}>
              Article
            </label>
            <input
              className={styles.input}
              name="title"
              value={form.title}  
              placeholder=" Name article"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="description" className={styles.label}>
              Description
            </label>
            <textarea
              className={styles.input}
              name="description"
              value={form.description}  
              placeholder="Description"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="date" className={styles.label}>
              date
            </label>
            <input
              className={styles.input}
              type="date"
              name="date"
              value={form.date}  
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="state" className={styles.label}>
              State
            </label>
            <select
              className={styles.input}
              name="state"
              value={form.state}
              onChange={handleChange}
            >
              <option value="">Select state</option>
              <option value="EXCELLENT">Excellent</option>
              <option value="GOOD">Good</option>
              <option value="REGULAR">Regular</option>
            </select>
          </div>

          <div>
            <label htmlFor="category" className={styles.label}>
              Category
            </label>
            <select
              className={styles.input}
              name="category"
              value={form.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="SHOES">Shoes</option>
              <option value="T_SHIRTS">T-shirts</option>
              <option value="JACKET">Jacket</option>
              <option value="PANTS">Pants</option>
            </select>
          </div>

          <div className={styles.picture}>
            <div>
              <label htmlFor="picture" className={styles.label}>
                Image
              </label>
              <input
                type="file"
                name="picture"
                id="picture" 
                hidden
                autoComplete="off"
                onChange={handleFileChange}
              />
            </div>
            <div className={styles.uploadButton}>
              <label htmlFor="picture" className={styles.pictureButton}>
                UPLOAD
              </label>
              <span className={styles.file}>{fileName}</span>
            </div>
          </div>
          <section className={styles.buttonSection}>
            <ActionButton
              className="login"
              type="submit"
              disabled={!validForm}
              text={"CREATE"}
            />
            <ActionButton
              className="login"
              type="button"
              text={"CANCEL"}
              onClick={handleCancel}
            />
          </section>
        </form>
      </section>
    </>
  );
};

export default ArticleForm;
