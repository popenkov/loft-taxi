import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useActions } from '../../hooks/useActions';
import { ROUTES } from '../../constants/constants';
import { Button } from '../UI/Button';
import { Input } from '../UI/FormElements/Input';
import styles from './RegisterForm.module.scss';

export const RegisterForm = () => {
  const { register: registerAction } = useActions();

  const handleFormSubmit = (data) => {
    // TODO backend is waiting for surname key
    data.surname = data.name;
    console.log(data);
    registerAction(data);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  return (
    <div onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <h2 className={styles.title}>Регистрация</h2>
      <form>
        <Input
          {...register('email', {
            required: 'Email is required!',
          })}
          placeholder="Email:"
          error={errors.email}
        />
        <Input
          {...register('name', {
            required: 'Name is required!',
          })}
          placeholder="Как вас зовут?*"
          error={errors.name}
        />
        <Input
          {...register('password', {
            required: 'Password is required!',
          })}
          placeholder="Придумайте пароль*"
          error={errors.password}
        />

        <Button text="Зарегистрироваться" type="submit" buttonType="primary" />
      </form>
      <div className={styles.switchFormContainer}>
        <span className={styles.switchFormText}> Уже зарегистрированы?</span>
        <Link to={ROUTES.HOME} className={styles.registerLink}>
          Войти
        </Link>
      </div>
    </div>
  );
};
