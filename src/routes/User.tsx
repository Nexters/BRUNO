import { Routes, Route } from 'react-router-dom';

import UserPage from '@src/pages/UserPage';

function Auth() {
  return (
    <Routes>
      <Route path="/my" element={<UserPage isMy />} />
      <Route path="/:userId" element={<UserPage />} />
    </Routes>
  );
}

export default Auth;
