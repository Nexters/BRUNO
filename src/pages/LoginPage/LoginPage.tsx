import React from 'react';

import LoginForm from '@src/components/LoginForm';
import PageLayout from '@src/components/shared/PageLayout';

function LoginPage() {
  return (
    <PageLayout>
      로그인
      <LoginForm />
    </PageLayout>
  );
}

export default LoginPage;
