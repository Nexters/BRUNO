import { Routes, Route } from 'react-router-dom';

import UserPage from '@src/pages/UserPage';
import ErrorPage, { ErrorType } from '@src/components/shared/Error';

function Auth() {
  return (
    <Routes>
      <Route path="/my" element={<UserPage isMy />} />
      <Route path="/:userId" element={<UserPage />} />
      <Route path="*" element={<ErrorPage type={ErrorType.NOT_FOUND} />} />
    </Routes>
  );
}

export default Auth;
