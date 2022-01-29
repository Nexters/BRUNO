import { ChangeEvent, useCallback, useState } from 'react';

import LoginForm from '@src/components/LoginForm';
import PageLayout from '@src/components/shared/PageLayout';
import { LoginFormType } from '@src/components/LoginForm/type';

function KlipLoginPage() {
  const [profileId, setProfileId] = useState('');

  const handleClickLogin = useCallback(async () => {
    // TODO : klip 로그인 연동 ?!
    if (!profileId) return null;
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setProfileId(e.target.value);
  }, []);

  return (
    <PageLayout padding="20px">
      <LoginForm
        type={LoginFormType.KLIP}
        onClickLoginButton={handleClickLogin}
        onChangeInput={handleChange}
      />
    </PageLayout>
  );
}

export default KlipLoginPage;
