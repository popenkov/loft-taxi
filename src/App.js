import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/global.scss';
import './styles/styles.scss';
import { Header } from './components/Header';
import { ROUTES } from './constants/constants';
import { Login, MapPage, Profile, Register } from './pages';
import AuthContext from './context/AuthContext';

function App() {
  const [currentPage, setCurrentPage] = useState('profile');
  const [isAuthed, setIsAuthed] = useState(false);

  const login = () => {
    setIsAuthed(true);
  };

  const logout = () => {
    setIsAuthed(false);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const PAGES_MAP = {
    login: <Login handleChangePage={handleNavigation} />,
    register: <Register handleChangePage={handleNavigation} />,
    profile: <Profile handleChangePage={handleNavigation} />,
    map: <MapPage handleChangePage={handleNavigation} />,
  };

  const ChosenPage = PAGES_MAP[currentPage];

  return (
    <AuthContext.Provider value={{ isAuthed, login, logout }}>
      {ChosenPage}
    </AuthContext.Provider>
  );
}

export default App;
