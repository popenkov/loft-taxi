import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/global.scss';
import './styles/styles.scss';
import { Header } from './components/Header';
import { ROUTES } from './constants/constants';
import { Home, MapPage, Profile, Register } from './pages';
import { useAuth } from './context/AuthContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
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
