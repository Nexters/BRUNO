import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import QRCode from 'react-qr-code';

import MainButton from '@src/components/shared/MainButton';
import { useKlipPrepare, useKlipLogin, openDeepLink } from '@src/klip';
import { getKlipQrcodeSelector } from '@src/recoil/auth';
import { useLogin } from '@src/hooks';

const Root = styled.div`
  width: 100%;
  padding: 40px 20px;
  display: flex;
`;

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 40px;
`;

enum LoginStage {
  INITIAL = 'inital',
  PREPARE = 'prepare',
  REQUEST = 'request',
  RESULT = 'result',
}

function LoginPage() {
  const [loginStage, setLoginStage] = useState(LoginStage.INITIAL);
  const { isFetched, requestKey } = useKlipPrepare();
  const { isMobile } = useLogin();
  const { refetch: klipLogin } = useKlipLogin();
  const qrcode = useRecoilValue(getKlipQrcodeSelector);

  useEffect(() => {
    if (isFetched) setLoginStage(LoginStage.PREPARE);
  }, [isFetched]);

  const handleClickButton = () => {
    if (loginStage === LoginStage.PREPARE) {
      if (isMobile) openDeepLink(requestKey);
      else klipLogin();
      setLoginStage(LoginStage.REQUEST);
    } else if (loginStage === LoginStage.REQUEST) {
      klipLogin();
    }
  };

  return (
    <Root>
      <BottomWrapper>
        {isFetched && !isMobile && <QRCode value={qrcode} size={100} />}
        <MainButton
          onClick={handleClickButton}
          value="Connect With Kakao Klip"
          buttonStyle={{ margin: 0 }}
        />
      </BottomWrapper>
    </Root>
  );
}

export default LoginPage;
