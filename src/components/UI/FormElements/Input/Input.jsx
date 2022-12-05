import { PropTypes } from "prop-types";
import React from "react";

import styles from "./Input.module.scss";

export const Input = ({ label, value, changeHandler, type, name, id }) => {
  const handleInputChange = (evt) => {
    changeHandler(evt);
  };
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="email" className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={handleInputChange}
        type={type}
        name={name}
        className={styles.input}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
