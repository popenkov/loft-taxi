import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header';
import { ROUTES } from './constants/constants';
import { Login, Map, Profile, Register } from './pages';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handleNavigation = (page) => {
    console.log('page', page);
    setCurrentPage(page);
  };

  const PAGES_MAP = {
    login: <Login handleChangePage={handleNavigation} />,
    register: <Register handleChangePage={handleNavigation} />,
    profile: <Profile handleChangePage={handleNavigation} />,
    map: <Map handleChangePage={handleNavigation} />,
  };

  const ChosenPage = PAGES_MAP[currentPage];

  return (
    <div>
      <Header handleChangePage={handleNavigation} />
      {ChosenPage}
    </div>
  );
}

export default App;
