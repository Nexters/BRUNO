import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Main from '@src/routes/Main';
import Auth from '@src/routes/Auth';
import User from '@src/routes/User';
import PrivateRoute from './routes/PrivateRoute';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';

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
              <Routes>
                {/* Auth */}
                <Route
                  path="/login"
                  element={<Auth component={<LoginPage />} />}
                />
                <Route
                  path="/join"
                  element={<Auth component={<JoinPage />} />}
                />
                {/* Authentication이 필요한 경우 PrivateRoute로 감싸주어야 함 */}
                <Route
                  path="*"
                  element={<PrivateRoute component={<Main />} />}
                />
                <Route
                  path="/user/*"
                  element={<PrivateRoute component={<User />} />}
                />
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
