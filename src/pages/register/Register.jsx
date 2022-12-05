import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import { ROUTES } from '../../constants/constants';

export const Register = ({ handleChangePage }) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    email: '',
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

  const handleLoginClick = () => {
    handleChangePage('login');
  };

  return (
    <div>
      Register
      <form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={formState.login}
          onChange={handleInputChange}
          type="email"
          name="email"
        />
        <label htmlFor="name">Как вас зовут?*</label>
        <input
          id="name"
          value={formState.login}
          onChange={handleInputChange}
          type="name"
          name="name"
        />
        <label htmlFor="password">Придумайте пароль*</label>
        <input
          id="password"
          value={formState.password}
          onChange={handleInputChange}
          type="password"
          name="password"
        />
        <button onClick={handleSubmitClick}>Войти</button>
        <button onClick={handleLoginClick}>Login</button>
      </form>
    </div>
  );
};

Register.propTypes = {
  handleChangePage: PropTypes.func.isRequired,
};
