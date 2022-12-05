import React from 'react';
import { PropTypes } from 'prop-types';

import Sidebar from '../../components/Sidebar/Sidebar';
import styles from './Home.module.scss';
import { LoginForm } from '../../components/LoginForm';
import { useAuth } from '../../context/AuthContext';

export const Home = ({ handleChangePage }) => {
  const { isLoggedIn } = useAuth();

  const handleProfileClick = () => {
    handleChangePage('profile');
  };

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
          <LoginForm title="Войти" handleChangePage={handleChangePage} />
        )}
      </div>
    </div>
  );
};

Home.propTypes = {
  handleChangePage: PropTypes.func.isRequired,
};
