import { Routes, Route } from 'react-router-dom';
import TutorialPage from '@src/pages/TutorialPage';

function Tutorial() {
  return (
    <Routes>
      <Route path="/" element={<TutorialPage />} />
    </Routes>
  );
}

export default Tutorial;
