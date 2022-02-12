import { Routes, Route } from 'react-router-dom';

import HomePage from '@src/pages/HomePage/HomePage';
import CreateCookiePage from '@src/pages/CreateCookiePage';
import CookieDetailPage from '@src/pages/CookieDetailPage';
import PageLayout from '@src/components/shared/PageLayout';

function Main() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLayout>
            <HomePage />
          </PageLayout>
        }
      />
      <Route
        path="/create"
        element={
          <PageLayout>
            <CreateCookiePage />
          </PageLayout>
        }
      />
      <Route
        path="/cookie/:id"
        element={
          <PageLayout>
            <CookieDetailPage />
          </PageLayout>
        }
      />
    </Routes>
  );
}

export default Main;
