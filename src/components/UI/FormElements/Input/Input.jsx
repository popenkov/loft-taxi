import { PropTypes } from 'prop-types';
import React, { forwardRef } from 'react';

import styles from './Input.module.scss';

export const Input = forwardRef(
  ({ placeholder, error, type = 'text', ...rest }, ref) => {
    return (
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>
          {placeholder}
        </label>
        <input ref={ref} type={type} {...rest} className={styles.input} />
        {error && <span className={styles.error}>{error.message}</span>}
      </div>
    );
  }
);

Input.propTypes = {
  placeholder: PropTypes.string,
  error: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};
