import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';

import { ReactComponent as MapLogo } from '../../../assets/icons/map-icon.svg';
import { ReactComponent as ProfileLogo } from '../../../assets/icons/profile.svg';

import styles from './Navigation.module.scss';

const links = [
  {
    name: 'Карта',
    href: '/map',
    icon: MapLogo,
  },
  {
    name: 'Профиль',
    href: '/profile',
    icon: ProfileLogo,
  },
];

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav className={styles.navigation}>
      {links.map((link) => {
        const activeLink = pathname === link.href;
        const Icon = link.icon;
        return (
          <Link
            to={link.href}
            key={link.name}
            className={cn(styles.link, {
              [styles.linkActive]: activeLink,
            })}
          >
            <span className={styles.icon} data-testid="links-item">
              <Icon />
            </span>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
