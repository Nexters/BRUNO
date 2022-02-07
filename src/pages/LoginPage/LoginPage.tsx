import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PageLayout from '@src/components/shared/PageLayout';
import MainButton from '@src/components/shared/MainButton';
import { LoginType } from '@src/components/LoginForm/type';

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

function LoginPage() {
  const navigate = useNavigate();
  const handleClickButton = (type: LoginType) => {
    if (type === LoginType.KLIP) navigate('./klip');
    else navigate('./other');
  };
  return (
    <PageLayout padding="40px 20px" layoutStyle={{ display: 'flex' }}>
      <BottomWrapper>
        <MainButton
          onClick={() => handleClickButton(LoginType.KLIP)}
          value="Connect With Kakao Klip"
          buttonStyle={{ margin: 0 }}
        />
      </BottomWrapper>
    </PageLayout>
  );
}

export default LoginPage;
