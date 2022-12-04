import React from 'react';

import { ReactComponent as RoadLogo } from '../../assets/icons/road-logo.svg';
import { ReactComponent as TaxiLogo } from '../../assets/icons/taxi-logo.svg';
import styles from './header.module.scss';
import NavLink from './NavLink/NavLink';

const links = [
  {
    name: 'Логин',
    href: 'login',
  },
  {
    name: 'Карта',
    href: 'map',
  },
  {
    name: 'Профиль',
    href: 'profile',
  },
];

export const Header = ({ handleChangePage }) => {
  const handleNavigationClick = (page) => {
    handleChangePage(page);
  };

  return (
    <header className={styles.header}>
      {/* TODO temporaly commented. Implementation with router dom */}
      {/* <Navigation /> */}
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <RoadLogo className={styles.roadLogo} />
          <TaxiLogo className={styles.taxiLogo} />
        </div>
        <div>
          {links.map((link) => {
            return (
              <NavLink
                {...link}
                color="secondary"
                key={link.name}
                onClick={() => handleNavigationClick(link.href)}
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>
      </div>
    </header>
  );
};
