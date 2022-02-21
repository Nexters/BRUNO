import { Routes, Route } from 'react-router-dom';
import TutorialPage from '@src/pages/TutorialPage';
import CompletedMakePage from '@src/pages/CompletedMakePage';

function Tutorial() {
  return (
    <Routes>
      <Route path="/" element={<TutorialPage />} />
      <Route path="/completed" element={<CompletedMakePage />} />
    </Routes>
  );
}

export default Tutorial;
