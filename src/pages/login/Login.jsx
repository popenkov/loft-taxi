import Sidebar from '../../components/Sidebar/Sidebar';
import React from 'react';

import styles from './Login.module.scss';
import { LoginForm } from '../../components/LoginForm';

export const Login = ({ handleChangePage }) => {
  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">Login page</h1>
      <Sidebar />
      <div className={styles.main}>
        <LoginForm title="Войти" handleChangePage={handleChangePage} />
      </div>
    </div>
  );
};
