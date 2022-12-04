import React from 'react';

import styles from './NavLink.module.scss';

function NavLink({ name, href }) {
  return <button className={styles.link}>{name}</button>;
}

export default NavLink;
