import { Routes, Route } from 'react-router-dom';

import HomePage from '@src/pages/HomePage/HomePage';
import CreateCookiePage from '@src/pages/CreateCookiePage';
import CookieDetailPage from '@src/pages/CookieDetailPage';
import AskPage from '@src/pages/AskPage';
import PageLayout from '@src/components/shared/PageLayout';
import { HeaderPage } from '@src/components/Header/const';

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
        path="/edit/:cookieId"
        element={
          <PageLayout>
            <CreateCookiePage isEdit />
          </PageLayout>
        }
      />
      <Route
        path="/ask/:userId"
        element={
          <PageLayout pageType={HeaderPage.ASK}>
            <AskPage />
          </PageLayout>
        }
      />
      <Route
        path="/cookie/:cookieId"
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
