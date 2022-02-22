import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import QRCode from 'react-qr-code';

import MainButton from '@src/components/shared/MainButton';
import Modal from '@src/components/shared/Modal';
import { MainLogo, MainLogoImage } from '@src/assets/images';
import { useKlipPrepare, useKlipLogin, openDeepLink } from '@src/klip';
import { getKlipQrcodeSelector } from '@src/recoil/klip';
import { useLogin } from '@src/hooks';

import { Root, BottomWrapper, LogoWrapper, LogoImage, Logo, SubText } from './styled';
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
        <LogoImage src={MainLogoImage} />
        <Logo src={MainLogo} />
        <SubText>{'세상 모든 아이덴티티를\n사고 파는 NFT 플랫폼'}</SubText>
      </LogoWrapper>
      <BottomWrapper>
        {/* {isFetched && !isMobile && <QRCode value={qrcode} size={100} />} */}
        <MainButton onClick={handleClickButton} value="카카오 Klip 으로 연동하기" buttonStyle={{ margin: 0 }} />
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
