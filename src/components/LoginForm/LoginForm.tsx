import { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';

import caver from '@src/klaytn/caver';
import LoginInput from '@src/components/LoginInput';
import MainButton from '@src/components/shared/MainButton';

import { LoginFormType } from './type';
import { LOGIN_FORM_TEXT_MAP } from './const';

const Title = styled.div`
  margin: 46px 0 24px 0;
  font-size: 24px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0.002em;
  color: ${(props) => props.theme.colors.gray90};
`;

interface Props {
  type: LoginFormType;
}

function LoginForm({ type }: Props) {
  const TEXT = LOGIN_FORM_TEXT_MAP[type];
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
      <Title>{TEXT.title}</Title>
      <LoginInput
        placeholder={TEXT.placeholder}
        label={TEXT.inputLabel}
        onChange={handleChange}
      />
      <MainButton value={TEXT.button} onClick={handleClickLogin} />
    </div>
  );
}

export default LoginForm;
