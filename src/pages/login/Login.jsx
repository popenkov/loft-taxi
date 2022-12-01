import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/constants';

export const Login = ({ handleChangePage }) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '123',
    password: '',
  });

  const handleInputChange = (evt) => {
    const inputValue = evt.target.value;
    const inputName = evt.target.name;
    setFormState({ ...formState, [inputName]: inputValue });
  };

  const handleSubmitClick = (evt) => {
    evt.preventDefault();
    // TODO  navigate(ROUTES.MAP);
    handleChangePage('map');
  };

  const handleRegisterClick = () => {
    handleChangePage('register');
  };

  return (
    <div>
      <h1>Login page</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          value={formState.login}
          onChange={handleInputChange}
          type="email"
          name="email"
        />
        <label htmlFor="password">Пароль:</label>
        <input
          id="password"
          value={formState.password}
          onChange={handleInputChange}
          type="password"
          name="password"
        />
        <button onClick={handleSubmitClick}>Войти</button>
      </form>
      <button onClick={handleRegisterClick}>Регистрация</button>
    </div>
  );
};
