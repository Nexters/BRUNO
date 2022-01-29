import { ChangeEvent, useCallback, useState } from 'react';

import caver from '@src/klaytn/caver';
import MainButton from '@src/components/shared/MainButton';

function LoginForm() {
  const [privateKey, setPrivateKey] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setPrivateKey(e.target.value);
  }, []);

  const handleClickLogin = useCallback(async () => {
    if (!privateKey) return null;
    await caver.kas.wallet.getAccount(privateKey);
  }, []);

  return (
    <div>
      <input
        className="LoginForm__input"
        type="password"
        name="privateKey"
        // label="Login with Private Key"
        placeholder="0x2c4078447..."
        onChange={handleChange}
      />
      <MainButton value="로그인" onClick={handleClickLogin} />
    </div>
  );
}

export default LoginForm;
