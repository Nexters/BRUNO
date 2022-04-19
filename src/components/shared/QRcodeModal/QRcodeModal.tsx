import { useRecoilState, useRecoilValue } from 'recoil';
import QRCode from 'react-qr-code';

import Icon from '@src/assets/Icon';
import { CameraIcon, QRIcon } from '@src/assets/images';
import IconButton from '@src/components/shared/IconButton';
import { klipRequestKeyAtom } from '@src/recoil/klip';
import { QRcodeModalAtom } from '@src/recoil/ui';
import { theme } from '@src/assets/styles';
import {
  Root,
  Box,
  Header,
  ContentWrapper,
  Title,
  // Timer,
  QRcodeWrapper,
  GuideIconWrapper,
  IconWrapper,
} from './styled';

function QRcodeModal() {
  const request = useRecoilValue(klipRequestKeyAtom);
  const [isOpen, setOpen] = useRecoilState(QRcodeModalAtom);
  const qrcode = `https://klipwallet.com/?target=/a2a?request_key=${request.requestKey}`;

  if (!isOpen || !request.requestKey) return null;

  return (
    <Root>
      <Box>
        <Header>
          <IconButton icon="right" size={24} color={theme.colors.basic.gray100} noFill onClick={() => setOpen(false)} />
        </Header>
        <ContentWrapper>
          <Title>카카오 Klip QR 연결</Title>
          {/* <Timer>남은 시간</Timer> */}
          <QRcodeWrapper>
            <QRCode value={qrcode} size={150} />
          </QRcodeWrapper>

          <div>{`카메라를 통해\nQR 코드를 스캔해주세요.`}</div>

          <GuideIconWrapper>
            <IconWrapper>
              <CameraIcon />
            </IconWrapper>
            <Icon icon="left" size={24} color={theme.colors.basic.gray50} noFill />
            <IconWrapper>
              <QRIcon />
            </IconWrapper>

            <span>카메라 실행</span>
            <div />
            <span>코드 스캔 후 로그인</span>
          </GuideIconWrapper>
        </ContentWrapper>
      </Box>
    </Root>
  );
}

export default QRcodeModal;
