import styles from "./Filter.module.css";

const Filter = ({ handleChange, filter }) => {

  return (
    <label className={styles.filter_text}> Find contacts by name <br/>
        <input
        className={styles.filter_input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}        
        autoComplete="off"/>
    </label>
  )
}

export default Filter