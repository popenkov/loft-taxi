import React from 'react';
import cn from 'classnames';
import { PropTypes } from 'prop-types';

import styles from './Button.module.scss';

export const Button = ({ text, type, clickHandler, disabled }) => {
  const handleBtnClick = (evt) => {
    clickHandler(evt);
  };
  return (
    <button
      className={cn(styles.button, {
        [styles.primary]: type === 'primary',
        [styles.secondary]: type === 'secondary',
      })}
      onClick={handleBtnClick}
      disabled={disabled}
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
  type: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
