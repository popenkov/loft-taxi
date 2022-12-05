import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/global.scss';
import './styles/styles.scss';
import { ROUTES } from './constants/constants';
import { useAuth } from './context/AuthContext/AuthContext';
import { Home, MapPage, Profile, Register } from './pages';

function App() {
  const [currentPage, setCurrentPage] = useState('map');
  const { isLoggedIn } = useAuth();

  const handleNavigation = (page) => {
    if (isLoggedIn) {
      setCurrentPage(page);
    } else {
      setCurrentPage('home');
    }
  };

  const PAGES_MAP = {
    home: <Home handleChangePage={handleNavigation} />,
    register: <Register handleChangePage={handleNavigation} />,
    profile: <Profile handleChangePage={handleNavigation} />,
    map: <MapPage handleChangePage={handleNavigation} />,
  };

  const ChosenPage = PAGES_MAP[currentPage];

  return <div>{ChosenPage}</div>;
}

export default App;
