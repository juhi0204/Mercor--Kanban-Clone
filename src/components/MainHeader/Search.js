import React, { useState } from "react";

import { SearchIcon } from "../../assets/id/SearchIcon";

import styles from "./Search.module.css";

export default function Search() {
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className={styles.inputContainer}>
      <span>
        <SearchIcon />
      </span>
      <input
        type="text"
        id="search"
        value={value}
        name="search"
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <label htmlFor="search" className={value && styles.filled}>
        Search for anything...
      </label>
    </div>
  );
}