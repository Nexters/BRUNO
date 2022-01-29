import { Routes, Route } from 'react-router-dom';

import LoginPage from '@src/pages/LoginPage';
import KlipLoginPage from '@src/pages/KlipLoginPage';
import OtherWalletLoginPage from '@src/pages/OtherWalletLoginPage';

function Auth() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/klip" element={<KlipLoginPage />} />
      <Route path="/other" element={<OtherWalletLoginPage />} />
    </Routes>
  );
}

export default Auth;
