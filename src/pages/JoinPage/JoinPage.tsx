import { useState } from 'react';

import LoginForm from '@src/components/LoginForm';
import { LoginType } from '@src/components/LoginForm/type';
import PageLayout from '@src/components/shared/PageLayout';
import { HeaderPage } from '@src/components/Header/const';

function JoinPage() {
  const [profileId, setProfileId] = useState('');

  const handleClickLogin = async () => {
    console.log(profileId);
  };

  return (
    <PageLayout padding="20px" pageType={HeaderPage.JOIN} onlyContents>
      <LoginForm
        type={LoginType.KLIP}
        value={profileId}
        onClickLoginButton={handleClickLogin}
        onChangeInput={setProfileId}
      />
    </PageLayout>
  );
}

export default JoinPage;
