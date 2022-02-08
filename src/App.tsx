import { RecoilRoot } from 'recoil';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Main from '@src/routes/Main';
import Auth from '@src/routes/Auth';
import User from '@src/routes/User';
import PrivateRoute from './routes/PrivateRoute';

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
          <BrowserRouter>
            <Routes>
              {/* Authentication이 필요한 경우 PrivateRoute로 감싸주어야 함 */}
              <Route path="/login/*" element={<Auth />} />
              <Route path="/" element={<PrivateRoute component={<Main />} />} />
              <Route
                path="/user/*"
                element={<PrivateRoute component={<User />} />}
              />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
        {/* dev tool 제거 시 아래 line comment out! */}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </CookiesProvider>
  );
}

export default App;
