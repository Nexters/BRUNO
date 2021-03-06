import { Routes, Route } from 'react-router-dom';

import HomePage from '@src/pages/HomePage';
import CreateCookiePage from '@src/pages/CreateCookiePage';
import CookieDetailPage from '@src/pages/CookieDetailPage';
import SettingPage from '@src/pages/SettingPage';
import NotificationPage from '@src/pages/NotificationPage';
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
        path="/settings"
        element={
          <PageLayout pageType={HeaderPage.SETTING} padding="20px">
            <SettingPage />
          </PageLayout>
        }
      />
      <Route
        path="/notifications"
        element={
          <PageLayout pageType={HeaderPage.NOTIFICATION}>
            <NotificationPage />
          </PageLayout>
        }
      />
      <Route
        path="/create/cookie"
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
