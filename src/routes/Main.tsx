import { Routes, Route } from 'react-router-dom';

import HomePage from '@src/pages/HomePage/HomePage';
import CookieDetailPage from '@src/pages/CookieDetailPage/CookieDetailPage';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cookie/:id" element={<CookieDetailPage />} />
    </Routes>
  );
}

export default Main;
