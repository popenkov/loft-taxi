import { PropTypes } from 'prop-types';
import React, { forwardRef } from 'react';

import styles from './Input.module.scss';

export const Input = forwardRef(
  ({ placeholder, error, type = 'text', style, ...rest }, ref) => {
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

// Input.propTypes = {
//   placeholder: PropTypes.string.isRequired,
//   error: PropTypes.obj,
//   value: PropTypes.string,
//   changeHandler: PropTypes.func.isRequired,
//   type: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };
