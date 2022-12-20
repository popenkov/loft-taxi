import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';

import styles from './Navigation.module.scss';

const links = [
  {
    name: 'Карта',
    href: '/map',
  },
  {
    name: 'Профиль',
    href: '/profile',
  },
];

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      {links.map((link) => {
        const activeLink = pathname === link.href;
        return (
          <Link
            to={link.href}
            key={link.name}
            className={cn(styles.link, {
              [styles.linkActive]: activeLink,
            })}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
