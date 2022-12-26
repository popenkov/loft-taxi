import cn from 'classnames';
import { PropTypes } from 'prop-types';
import React from 'react';

import styles from './Button.module.scss';

export const Button = ({ text, buttonType, clickHandler, disabled, form }) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: buttonType === 'primary',
        [styles.secondary]: buttonType === 'secondary',
      })}
      onClick={clickHandler}
      disabled={disabled}
      form={form}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  disabled: PropTypes.bool.isRequired,
  form: PropTypes.string,
};
