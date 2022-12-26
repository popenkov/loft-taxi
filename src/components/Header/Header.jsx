import { useActions } from '../../hooks/useActions';
import { PropTypes } from 'prop-types';
import React, { useState } from 'react';
import cn from 'classnames';

import { ReactComponent as RoadLogo } from '../../assets/icons/road-logo.svg';
import { ReactComponent as TaxiLogo } from '../../assets/icons/taxi-logo.svg';
import { ReactComponent as BurgerIcon } from '../../assets/icons/burger-menu.svg';
import { ReactComponent as CloseIcon } from '../../assets/icons/close-menu.svg';
import styles from './header.module.scss';
import { Navigation } from './Navigation';
import { NavLink } from '../UI/NavLink/';
import ExitLink from './ExitLink/ExitLink';

export const Header = () => {
  const { logout } = useActions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoutClick = () => {
    logout();
  };

  const handleBurgerMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleMenuCloseClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div
        className={cn(styles.mobileBurger, {
          [styles.open]: isMenuOpen,
        })}
        onClick={handleBurgerMenuClick}
      >
        <BurgerIcon />
      </div>
      <div
        className={cn(styles.closeButton, {
          [styles.open]: isMenuOpen,
        })}
        onClick={handleMenuCloseClick}
      >
        <CloseIcon />
      </div>
      <div
        className={cn(styles.headerContainer, {
          [styles.open]: isMenuOpen,
        })}
      >
        <div className={styles.logoContainer}>
          <RoadLogo className={styles.roadLogo} />
          <TaxiLogo className={styles.taxiLogo} />
        </div>
        <div className={styles.navigationContainer}>
          <Navigation />

          <ExitLink handleClick={handleLogoutClick} />
        </div>
      </div>
    </header>
  );
};
