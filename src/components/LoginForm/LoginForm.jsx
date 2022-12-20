import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useActions } from '../../hooks/useActions';
import { ROUTES } from '../../constants/constants';
import { Button } from '../UI/Button';
import { Input } from '../UI/FormElements/Input';
import styles from './LoginForm.module.scss';

export const LoginForm = () => {
  const { login } = useActions();

  const handleFormSubmit = (data) => {
    login(data);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Войти</h2>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          {...register('email', {
            required: 'Email is required!',
          })}
          placeholder="Email"
          error={errors.email}
        />
        <Input
          {...register('password', {
            required: 'Password is required!',
          })}
          placeholder="Пароль"
          error={errors.password}
        />

        <Link to="/" className={styles.forgotPassword}>
          Забыли пароль?
        </Link>

        <Button text="Войти" type="submit" buttonType="primary" />
      </form>
      <div className={styles.switchFormContainer}>
        <span className={styles.switchFormText}> Уже зарегистрированы?</span>
        <Link to={ROUTES.REGISTRATION} className={styles.registerLink}>
          Регистрация
        </Link>
      </div>
    </div>
  );
};
