import { PropTypes } from 'prop-types';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';
import { ROUTES } from '../../constants/constants';
import { useAuth } from '../../context/AuthContext/AuthContext';
import { Button } from '../UI/Button';
import { Input } from '../UI/FormElements/Input';
import styles from './LoginForm.module.scss';

export const LoginForm = ({ title }) => {
  const { login, register } = useActions();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmitClick = (evt) => {
    evt.preventDefault();
    // navigate(ROUTES.MAP);

    login(formState);
  };

  const handleRegisterClick = () => {};

  const handleInputChange = (evt) => {
    const inputValue = evt.target.value;
    const inputName = evt.target.name;
    setFormState({ ...formState, [inputName]: inputValue });
  };
  return (
    <div className={styles.form}>
      <h2 className={styles.title}>{title}</h2>
      <form>
        <Input
          label={'Email:'}
          id="email"
          value={formState.login}
          type="email"
          name="email"
          changeHandler={handleInputChange}
        />
        <Input
          label={'Пароль:'}
          id="password"
          value={formState.password}
          type="password"
          name="password"
          changeHandler={handleInputChange}
        />

        <Link to="/" className={styles.forgotPassword}>
          Забыли пароль?
        </Link>

        <Button text="Войти" type="primary" clickHandler={handleSubmitClick} />
      </form>
      <div className={styles.switchFormContainer}>
        <span className={styles.switchFormText}> Уже зарегистрированы?</span>
        <Button
          text="Регистрация"
          type="secondary"
          clickHandler={handleRegisterClick}
        />
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  title: PropTypes.string.isRequired,
};
