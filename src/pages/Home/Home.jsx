import { ROUTES } from '../../constants/constants';
import React from 'react';

import { LoginForm } from '../../components/LoginForm';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useAuth } from '../../hooks/useAuth';
import styles from './Home.module.scss';
import { Navigate } from 'react-router-dom';

export const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">Home page</h1>
      <Sidebar />
      <div className={styles.main}>
        {isLoggedIn ? <Navigate replace to={ROUTES.MAP} /> : <LoginForm />}
      </div>
    </div>
  );
};
