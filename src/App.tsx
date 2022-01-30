import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from '@src/routes/Auth';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/login/*" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
