import { useActions } from '../../hooks/useActions';
import { PropTypes } from 'prop-types';
import React from 'react';

import { ReactComponent as RoadLogo } from '../../assets/icons/road-logo.svg';
import { ReactComponent as TaxiLogo } from '../../assets/icons/taxi-logo.svg';
import styles from './header.module.scss';
import { Navigation } from './Navigation';
import NavLink from './NavLink/NavLink';

export const Header = () => {
  const { logout } = useActions();

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <RoadLogo className={styles.roadLogo} />
          <TaxiLogo className={styles.taxiLogo} />
        </div>
        <div className={styles.navigationContainer}>
          <Navigation />
          {
            <NavLink
              name="Выйти"
              color="secondary"
              handleClick={handleLogoutClick}
            ></NavLink>
          }
        </div>
      </div>
    </header>
  );
};
