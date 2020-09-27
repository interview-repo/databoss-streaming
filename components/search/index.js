import styles from "./style.module.css";
import SearchIcon from "../icons/search";
import { useState } from "react";

function Search({ data }) {
  const [value, setValue] = useState(data.search);

  return (
    <div className={styles.form}>
      <input
        name="search"
        type="text"
        placeholder="Search.."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit">
        <SearchIcon size={15} />
      </button>
    </div>
  );
}

export default Search;
