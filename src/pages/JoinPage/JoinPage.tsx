import { ChangeEvent, useCallback, useState } from 'react';

import LoginForm from '@src/components/LoginForm';
import PageLayout from '@src/components/shared/PageLayout';
import { LoginType } from '@src/components/LoginForm/type';

function JoinPage() {
  const [profileId, setProfileId] = useState('');

  const handleClickLogin = async () => {
    console.log(profileId);
  };

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setProfileId(e.target.value);
  }, []);

  return (
    <PageLayout padding="20px">
      <LoginForm
        type={LoginType.KLIP}
        onClickLoginButton={handleClickLogin}
        onChangeInput={handleChange}
      />
    </PageLayout>
  );
}

export default JoinPage;
