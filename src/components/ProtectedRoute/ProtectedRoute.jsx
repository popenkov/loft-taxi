import { useAuth } from '../../context/AuthContext';
import React from 'react';
import { Navigate } from 'react-router-dom/dist';

export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return children;
};
