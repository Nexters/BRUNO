import { Routes, Route } from 'react-router-dom';

import HomePage from '@src/pages/HomePage/HomePage';
import CreateCookiePage from '@src/pages/CreateCookiePage';
import CookieDetailPage from '@src/pages/CookieDetailPage';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateCookiePage />} />
      <Route path="/cookie/:id" element={<CookieDetailPage />} />
    </Routes>
  );
}

export default Main;
