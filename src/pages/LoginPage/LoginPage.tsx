import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import QRCode from 'react-qr-code';

import MainButton from '@src/components/shared/MainButton';
import Modal from '@src/components/shared/Modal';
import { AppTitle } from '@src/components/Header/MainHeader';
import { MainLogo01 } from '@src/assets/images';
import { useKlipPrepare, useKlipLogin, openDeepLink } from '@src/klip';
import { getKlipQrcodeSelector } from '@src/recoil/klip';
import { useLogin } from '@src/hooks';

import { Root, BottomWrapper, LogoWrapper, Logo, SubText } from './styled';
import { LoginStage } from './types';
import { LOGIN_MODAL_LABEL } from './const';

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
    if (isRequestFail) setLoginStage(LoginStage.REQUEST_FAIL);
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
    <Root>
      <LogoWrapper>
        <Logo src={MainLogo01} />
        <AppTitle>Cookie Pang</AppTitle>
        <SubText>
          {
            '다른 사람의 비밀을 구매하고\n나만의 비밀로 포춘 쿠키를 만들어보세요.'
          }
        </SubText>
      </LogoWrapper>
      <BottomWrapper>
        {isFetched && !isMobile && <QRCode value={qrcode} size={100} />}
        <MainButton
          onClick={handleClickButton}
          value="카카오 Klip 으로 연동하기"
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
    </Root>
  );
}

export default LoginPage;
