import ButtonFilter from "../../atoms/ButtonFilter/ButtonFilter";
import SelectButton from "../../atoms/SelectButton/SelectButton";
import styles from "./filterNavBar.module.css";

const FilterNavBar = ({ categories, setCategory, sortByDate }) => {
  return (
    <div className={styles.containerBtnFilter}>

      <ButtonFilter onClick={() => setCategory("all")}>All Items</ButtonFilter>
      <SelectButton options={categories} onChange={setCategory}>Category</SelectButton>
      <ButtonFilter onClick={sortByDate}>Date</ButtonFilter>

    </div>
  );
};

export default FilterNavBar;