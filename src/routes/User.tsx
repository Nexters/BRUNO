import { Routes, Route } from 'react-router-dom';

import UserPage from '@src/pages/UserPage';
import NotFoundPage from '@src/pages/NotFoundPage';

function Auth() {
  return (
    <Routes>
      <Route path="/my" element={<UserPage isMy />} />
      <Route path="/:userId" element={<UserPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Auth;
