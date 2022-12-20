import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../constants/constants';
import { Home, MapPage, Profile, Register } from '../pages';
import { ProtectedRoute } from '../components/ProtectedRoute';

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />

      <Route path={ROUTES.REGISTRATION} element={<Register />} />
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
};
