import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({ loggedIn }) => {
  const [redirectTo, setRedirectTo] = useState(null);

  useEffect(() => {
    if (loggedIn === null) return;
    setRedirectTo('/');
  }, [loggedIn]);

  return loggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default ProtectedRoutes;
