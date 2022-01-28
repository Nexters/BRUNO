import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
