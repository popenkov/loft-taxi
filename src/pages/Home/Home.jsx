import { ROUTES } from '../../constants/constants';
import { PropTypes } from 'prop-types';
import React from 'react';

import { LoginForm } from '../../components/LoginForm';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useAuth } from '../../hooks/useAuth';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { isLoggedIn } = useAuth();

  console.log('isLoggedIn', isLoggedIn);

  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">Home page</h1>
      <Sidebar />
      <div className={styles.main}>
        {isLoggedIn ? (
          <h2>
            You`re authorized
            <Link to={ROUTES.PROFILE}>Go to profile</Link>
          </h2>
        ) : (
          <LoginForm title="Войти" />
        )}
      </div>
    </div>
  );
};
