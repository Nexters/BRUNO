import { Routes, Route } from 'react-router-dom';

import OtherWalletPage from '@src/pages/OtherWalletPage';
import LoginPage from '@src/pages/LoginPage';

function Auth() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/other" element={<OtherWalletPage />} />
    </Routes>
  );
}

export default Auth;
