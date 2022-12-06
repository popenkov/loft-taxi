import { PropTypes } from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select';

import styles from './Select.module.scss';

export const Select = ({ options, placeholder, field, error }) => {
  const handleSelectChange = (option) => {
    field.onChange(option.label);
  };
  return (
    <div className={styles.selectContainer}>
      <ReactSelect
        classNamePrefix="custom-select"
        placeholder={placeholder}
        options={options}
        onChange={handleSelectChange}
      />
      {error && <span className={styles.error}>{error.message}</span>}
    </div>
  );
};

// Select.propTypes = {
//   value: PropTypes.string,
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       value: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   handleChange: PropTypes.func,
// };
