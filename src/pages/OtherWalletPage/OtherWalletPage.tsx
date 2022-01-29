import { ChangeEvent, useCallback, useState } from 'react';

import caver from '@src/klaytn/caver';
import LoginForm from '@src/components/LoginForm';
import PageLayout from '@src/components/shared/PageLayout';
import { LoginFormType } from '@src/components/LoginForm/type';

function OtherWalletPage() {
  const [privateKey, setPrivateKey] = useState('');

  const handleClickLogin = useCallback(async () => {
    if (!privateKey) return null;
    await caver.kas.wallet.getAccount(privateKey);
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPrivateKey(e.target.value);
  }, []);

  return (
    <PageLayout padding="20px">
      <LoginForm
        type={LoginFormType.OTHER_WALLET}
        onClickLoginButton={handleClickLogin}
        onChangeInput={handleChange}
      />
    </PageLayout>
  );
}

export default OtherWalletPage;
