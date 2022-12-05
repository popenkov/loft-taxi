import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';

import styles from './NavLink.module.scss';

function NavLink({ name, href }) {
  const { pathname } = useLocation();
  const activeLink = pathname === href;

  return (
    <Link
      to={href}
      className={cn(styles.link, {
        [styles.linkActive]: activeLink,
      })}
    >
      {name}
    </Link>
  );
}

export default NavLink;
