import React from 'react';
import { PropTypes } from 'prop-types';

import styles from './NavLink.module.scss';

export const NavLink = ({ name, handleClick }) => {
  return (
    <button className={styles.link} onClick={handleClick}>
      {name}
    </button>
  );
};

NavLink.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};
