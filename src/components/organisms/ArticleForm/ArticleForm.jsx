import { useContext, useState } from "react";
import ArticlesContext from "../../../context/ArticlesContext";
import styles from "./articleForm.module.css";
import Title from "../../atoms/title/Title";
import ActionButton from "../../atoms/actionButton/ActionButton";

const ArticleForm = () => {
  const { createArticle } = useContext(ArticlesContext);

  const [form, setForm] = useState({
    title: "",
    description: "",
    creationDate: "",
    state: "",
    category: "",
    user: "",
  });

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

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

      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("creationDate", form.creationDate);
      formData.append("state", form.state);
      formData.append("category", form.category);
      formData.append("user", form.user);
      formData.append("image", image);

      await createArticle(formData);
    } catch (error) {
      console.error("New Article failed:", error);
      alert("Error creating article");
    }
  };

  const handleCancel = () => {
    setForm({
      title: "",
      description: "",
      creationDate: "",
      state: "",
      category: "",
      user: "",
    });

    setImage(null);
  };
  const [fileName, setfileName] = useState(" ");
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setfileName(file.name);
    }
  };
  const validForm =
    form.title !== "" &&
    form.description !== "" &&
    form.creationDate !== "" &&
    form.state !== "" &&
    form.category !== "" &&
    form.user !== "" &&
    image !== null;

  return (
    <>
      <section className={styles.content}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <Title text="New Article" />
          <div>
            <label htmlFor="name" className={styles.label}>
              Article
            </label>
            <input
              className={styles.input}
              name="title"
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
              placeholder="Description"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="date" className={styles.label}>
              Creation Date
            </label>
            <input
              className={styles.input}
              type="date"
              name="creationDate"
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
              onChange={handleChange}
            >
              <option>Used</option>
              <option>New</option>
            </select>
          </div>

          <div>
            <label htmlFor="category" className={styles.label}>
              Category
            </label>
            <select
              className={styles.input}
              name="category"
              onChange={handleChange}
            >
              <option>Clothes</option>
              <option>Electronics</option>
            </select>
          </div>

          <div>
            <label htmlFor="user" className={styles.label}>
              User
            </label>
            <input
              className={styles.input}
              name="user"
              placeholder="User"
              onChange={handleChange}
            />
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
              className={styles.button}
              type="submit"
              disabled={!validForm}
              text={"CREATE"}
            />
            <ActionButton
              className={styles.button}
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
