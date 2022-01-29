import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PageLayout from '@src/components/shared/PageLayout';
import MainButton from '@src/components/shared/MainButton';
import { LoginType } from '@src/components/LoginForm/type';

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

const WalletButtonStyle = {
  'margin-top': '16px',
  border: '1px solid #292A2C',
  background: 'none',
};

function LoginPage() {
  const navigate = useNavigate();
  const handleClickButton = (type: LoginType) => {
    if (type === LoginType.KLIP) navigate('./klip');
    else navigate('./other');
  };
  return (
    <PageLayout padding="20px">
      <div />
      <BottomWrapper>
        <MainButton
          onClick={() => handleClickButton(LoginType.KLIP)}
          value="Connect With Kakao Klip"
          buttonStyle={{ margin: 0 }}
        />
        <MainButton
          onClick={() => handleClickButton(LoginType.OTHER_WALLET)}
          value="Connect With Other Wallet"
          buttonStyle={WalletButtonStyle}
        />
      </BottomWrapper>
    </PageLayout>
  );
}

export default LoginPage;
