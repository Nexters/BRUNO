import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from '@src/routes/Main';
import Auth from '@src/routes/Auth';
import CreateCookiePage from '@src/pages/CreateCookiePage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login/*" element={<Auth />} />
          <Route path="/create/cookie/" element={<CreateCookiePage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
