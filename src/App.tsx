import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from '@src/routes/Auth';
import User from '@src/routes/User';
import CreateCookiePage from '@src/pages/CreateCookiePage';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/login/*" element={<Auth />} />
          <Route path="/user/*" element={<User />} />
          <Route path="/create/cookie/" element={<CreateCookiePage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
