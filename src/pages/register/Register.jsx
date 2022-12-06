import React from 'react';

import { RegisterForm } from '../../components/RegisterForm';
import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './Register.module.scss';

export const Register = () => {
  return (
    <div className={styles.page}>
      <h1 className="visually-hidden">Registration page</h1>
      <Sidebar />
      <div className={styles.main}>
        <RegisterForm />
      </div>
    </div>
  );
};
