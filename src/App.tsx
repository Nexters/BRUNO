import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Main from '@src/routes/Main';
import Auth from '@src/routes/Auth';
import User from '@src/routes/User';
import CreateCookiePage from '@src/pages/CreateCookiePage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login/*" element={<Auth />} />
            <Route path="/user/*" element={<User />} />
            <Route path="/create/cookie/" element={<CreateCookiePage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      {/* dev tool 제거 시 아래 line comment out! */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
