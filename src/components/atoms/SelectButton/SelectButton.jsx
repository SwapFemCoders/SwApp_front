import styles from "./selectButton.module.css";

const SelectButton = ({ options, onChange }) => {
  return (
    <select className={styles.select} onChange={(e) => onChange(e.target.value)}>
      <option value="all">All Categories</option>

      {/* {options.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))} */}

    </select>
  );
};

export default SelectButton;