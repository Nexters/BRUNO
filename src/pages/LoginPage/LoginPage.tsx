import { Routes, Route } from 'react-router-dom';

import OtherWalletPage from '@src/pages/OtherWalletPage';
import LoginForm from '@src/components/LoginForm';
import PageLayout from '@src/components/shared/PageLayout';

function SelectPage() {
  return (
    <PageLayout>
      <LoginForm />
    </PageLayout>
  );
}

function LoginPage() {
  return (
    <Routes>
      <Route path="/" element={<SelectPage />} />
      <Route path="/other" element={<OtherWalletPage />} />
    </Routes>
  );
}

export default LoginPage;
