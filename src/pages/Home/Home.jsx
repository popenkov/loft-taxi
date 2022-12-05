import { PropTypes } from 'prop-types';
import React from 'react';

import { LoginForm } from '../../components/LoginForm';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useAuth } from '../../context/AuthContext/AuthContext';
import styles from './Home.module.scss';

export const Home = () => {
  const { isLoggedIn } = useAuth();

  const handleProfileClick = () => {};

  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">Home page</h1>
      <Sidebar />
      <div className={styles.main}>
        {isLoggedIn ? (
          <h2>
            You`re authorized
            <button onClick={handleProfileClick}>Go to profile</button>
          </h2>
        ) : (
          <LoginForm title="Войти" />
        )}
      </div>
    </div>
  );
};
