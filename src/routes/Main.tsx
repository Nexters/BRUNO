import { Routes, Route } from 'react-router-dom';

import HomePage from '@src/pages/HomePage/HomePage';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default Main;
