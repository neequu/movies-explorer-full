import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, register } from '@/utils/mainApi';
import { saveToken } from '@/utils/utils';

export default function useAuth(setLoading) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [authError, setAuthError] = useState(false);

  function signOut() {
    localStorage.clear();
    navigate('/');
    setIsLoggedIn(false);
  }

  async function handleRegister(formData) {
    setAuthError(false);
    setLoading(true);
    try {
      await register(formData);

      const { email, password } = formData;
      handleLogin({ email, password });
    } catch (e) {
      setAuthError(true);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(formData) {
    setAuthError(false);
    setLoading(true);
    try {
      const { token } = await login(formData);
      saveToken(token);
      setIsLoggedIn(true);
      navigate('/movies');
    } catch (e) {
      console.log(e);
      setAuthError(true);
    } finally {
      setLoading(false);
    }
  }

  return {
    signOut,
    handleLogin,
    handleRegister,
    authError,
    isLoggedIn,
    setAuthError,
    setIsLoggedIn,
  };
}
