import { PropTypes } from "prop-types";
import React from "react";
import ReactSelect from "react-select";

import styles from "./Select.module.scss";

export const Select = ({ value, options, handleChange }) => {
  return (
    <div className={styles.selectContainer}>
      <ReactSelect
        classNamePrefix="custom-select"
        placeholder={""}
        options={options}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleChange: PropTypes.func,
};
