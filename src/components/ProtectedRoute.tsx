import React, { FC } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  component: FC,
  loggedIn: boolean,
  link: string,
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ component: Component, loggedIn, link, ...props }) => {
  return (
    loggedIn ? <Component {...props} /> : <Navigate to={link} replace />
  );
};

export default ProtectedRoute;
