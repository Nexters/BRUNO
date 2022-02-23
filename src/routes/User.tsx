import { Routes, Route } from 'react-router-dom';

import UserPage from '@src/pages/UserPage';
import ErrorPage, { ErrorPageType } from '@src/pages/ErrorPage';

function Auth() {
  return (
    <Routes>
      <Route path="/my" element={<UserPage isMy />} />
      <Route path="/:userId" element={<UserPage />} />
      <Route path="*" element={<ErrorPage type={ErrorPageType.NOT_FOUND} />} />
    </Routes>
  );
}

export default Auth;
