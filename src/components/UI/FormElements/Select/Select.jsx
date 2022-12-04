import React from 'react';
import ReactSelect, { OnChangeValue } from 'react-select';

import styles from './Select.module.scss';

export const Select = ({ value, options, handleChange }) => {
  return (
    <div className={styles.selectContainer}>
      <ReactSelect
        classNamePrefix="custom-select"
        placeholder={''}
        options={options}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
