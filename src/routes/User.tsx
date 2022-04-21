import { Routes, Route } from 'react-router-dom';

import UserPage from '@src/pages/UserPage';
import UserModifyPage from '@src/pages/UserModifyPage';
import ErrorPage, { ErrorType } from '@src/components/shared/Error';
import PageLayout from '@src/components/shared/PageLayout';
import { HeaderPage } from '@src/components/Header/const';

function Auth() {
  return (
    <Routes>
      <Route
        path="/my"
        element={
          <PageLayout>
            <UserPage isMy />
          </PageLayout>
        }
      />
      <Route
        path="/:userId"
        element={
          <PageLayout>
            <UserPage />
          </PageLayout>
        }
      />
      <Route
        path="/modify"
        element={
          <PageLayout pageType={HeaderPage.MODIFY}>
            <UserModifyPage />
          </PageLayout>
        }
      />
      <Route path="*" element={<ErrorPage type={ErrorType.NOT_FOUND} />} />
    </Routes>
  );
}

export default Auth;
