import { ChangeEvent, useCallback, useState } from 'react';
import styled from 'styled-components';

import LoginForm from '@src/components/LoginForm';
import { LoginType } from '@src/components/LoginForm/type';

const Root = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
`;

function JoinPage() {
  const [profileId, setProfileId] = useState('');

  const handleClickLogin = async () => {
    console.log(profileId);
  };

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setProfileId(e.target.value);
  }, []);

  return (
    <Root>
      <LoginForm
        type={LoginType.KLIP}
        onClickLoginButton={handleClickLogin}
        onChangeInput={handleChange}
      />
    </Root>
  );
}

export default JoinPage;
