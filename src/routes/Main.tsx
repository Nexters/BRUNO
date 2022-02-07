import { Routes, Route } from 'react-router-dom';

import HomePage from '@src/pages/HomePage/HomePage';
import CreateCookiePage from '@src/pages/CreateCookiePage';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateCookiePage />} />
    </Routes>
  );
}

export default Main;
