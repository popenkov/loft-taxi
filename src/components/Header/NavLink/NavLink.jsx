import React from 'react';

import styles from './NavLink.module.scss';

function NavLink({ name, handleClick }) {
  return (
    <button className={styles.link} onClick={handleClick}>
      {name}
    </button>
  );
}

export default NavLink;
