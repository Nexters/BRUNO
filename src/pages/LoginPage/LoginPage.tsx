import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import QRCode from 'react-qr-code';

import PageLayout from '@src/components/shared/PageLayout';
import MainButton from '@src/components/shared/MainButton';
import Modal from '@src/components/shared/Modal';
import { useKlipPrepare, useKlipLogin, openDeepLink } from '@src/klip';
import { getKlipQrcodeSelector } from '@src/recoil/auth';
import { useLogin } from '@src/hooks';
import { LoginStage } from './types';
import { LOGIN_MODAL_LABEL } from './const';

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 40px;
`;

function LoginPage() {
  const { isMobile } = useLogin();
  const { isFetched, requestKey } = useKlipPrepare();
  const { refetch: klipLogin, isRequestFail } = useKlipLogin();

  const [loginStage, setLoginStage] = useState(LoginStage.INITIAL);
  const qrcode = useRecoilValue(getKlipQrcodeSelector);

  useEffect(() => {
    if (isFetched) setLoginStage(LoginStage.PREPARE);
  }, [isFetched]);

  useEffect(() => {
    if (isFetched) setLoginStage(LoginStage.REQUEST_FAIL);
  }, [isRequestFail]);

  const requestKlipLogin = () => {
    if (isMobile) openDeepLink(requestKey);
    else klipLogin();
  };

  const handleClickButton = () => {
    if (loginStage === LoginStage.PREPARE) {
      requestKlipLogin();
      setLoginStage(LoginStage.REQUEST);
    }
  };

  return (
    <PageLayout padding="40px 20px" layoutStyle={{ display: 'flex' }}>
      <BottomWrapper>
        {isFetched && !isMobile && <QRCode value={qrcode} size={100} />}
        <MainButton
          onClick={handleClickButton}
          value="Connect With Kakao Klip"
          buttonStyle={{ margin: 0 }}
        />
      </BottomWrapper>
      <Modal
        label={LOGIN_MODAL_LABEL[loginStage]}
        open={loginStage === LoginStage.REQUEST}
        onClickYes={klipLogin}
        onClickNo={() => setLoginStage(LoginStage.PREPARE)}
      />
      <Modal
        label={LOGIN_MODAL_LABEL[loginStage]}
        open={loginStage === LoginStage.REQUEST_FAIL}
        onClickYes={requestKlipLogin}
        onClickNo={() => setLoginStage(LoginStage.PREPARE)}
      />
    </PageLayout>
  );
}

export default LoginPage;
