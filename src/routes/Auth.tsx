import { Routes, Route } from 'react-router-dom';

import LoginPage from '@src/pages/LoginPage';
import JoinPage from '@src/pages/JoinPage';

function Auth() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/join" element={<JoinPage />} />
    </Routes>
  );
}

export default Auth;
