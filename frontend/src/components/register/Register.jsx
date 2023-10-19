import AuthForm from '@/components/auth-form/AuthForm';
import AuthPage from '@/components/auth-page/AuthPage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Register({
  handleRegister,
  error,
  setAuthError,
  isLoggedIn,
  loading,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn]);

  return (
    <AuthPage heading='Добро пожаловать!'>
      <AuthForm
        handleSubmit={handleRegister}
        responseError={error}
        setAuthError={setAuthError}
        loading={loading}
      />
    </AuthPage>
  );
}

export default Register;
