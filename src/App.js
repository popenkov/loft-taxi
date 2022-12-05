import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles/global.scss';
import './styles/styles.scss';
import { ROUTES } from './constants/constants';
import { useAuth } from './context/AuthContext/AuthContext';
import { Home, MapPage, Profile, Register } from './pages';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path={ROUTES.MAP}
        element={
          <ProtectedRoute>
            <MapPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={ROUTES.PROFILE}
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
}

export default App;
