import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/global.scss';
import './styles/styles.scss';
import { Header } from './components/Header';
import { ROUTES } from './constants/constants';
import { Login, MapPage, Profile, Register } from './pages';

function App() {
  const [currentPage, setCurrentPage] = useState('profile');

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

  return <>{ChosenPage}</>;
}

export default App;
