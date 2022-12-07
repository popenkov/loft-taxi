import axios from 'axios';

import { saveToStorage } from './auth.helper';

export const AuthService = {
  async register(email, password, name, surname) {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}register`,
      {
        email,
        password,
        name,
        surname,
      }
    );

    if (response.data.token) {
      saveToStorage('userToken', response.data.token);
    }

    return response;
  },

  async login(email, password) {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}auth`, {
      email,
      password,
    });

    if (response.data.token) {
      saveToStorage('userToken', response.data.token);
    }

    return response;
  },

  logout() {
    localStorage.removeItem('userToken');
  },
};
