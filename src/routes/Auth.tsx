import { Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from '@src/pages/LoginPage';
import JoinPage from '@src/pages/JoinPage';
import { useLogin } from '@src/hooks';

function Auth() {
  const { isLoggedIn } = useLogin();

  if (isLoggedIn) return <Navigate to="/" />;

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
    </Routes>
  );
}

export default Auth;
