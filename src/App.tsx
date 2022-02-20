import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '@src/config/axios';
import Main from '@src/routes/Main';
import Auth from '@src/routes/Auth';
import User from '@src/routes/User';
import Tutorial from '@src/routes/Tutorial';
import PrivateRoute from '@src/routes/PrivateRoute';
import LoginPage from '@src/pages/LoginPage';
import JoinPage from '@src/pages/JoinPage';
import QRcodeModal from '@src/components/shared/QRcodeModal';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
              <QRcodeModal />
              <Routes>
                {/* Auth */}
                <Route path="/login" element={<Auth component={<LoginPage />} />} />
                <Route path="/join" element={<Auth component={<JoinPage />} />} />
                {/* Authentication이 필요한 경우 PrivateRoute로 감싸주어야 함 */}
                <Route path="*" element={<PrivateRoute component={<Main />} />} />
                <Route path="/users/*" element={<PrivateRoute component={<User />} />} />
                <Route path="/tutorial/*" element={<PrivateRoute component={<Tutorial />} />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </RecoilRoot>
        {/* dev tool 제거 시 아래 line comment out! */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
