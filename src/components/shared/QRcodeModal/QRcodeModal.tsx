import { useRecoilState, useRecoilValue } from 'recoil';
import QRCode from 'react-qr-code';

import Icon, { QrFlow1, QrFlow3, Right24, Left24 } from '@src/assets/Icon';
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
          <IconButton onClick={() => setOpen(false)}>
            <Icon style={{ marginRight: '8px' }}>
              <Right24 />
            </Icon>
          </IconButton>
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
              <Icon isOn>
                <QrFlow1 />
              </Icon>
            </IconWrapper>
            <Icon color={theme.colors.basic.gray50}>
              <Left24 />
            </Icon>
            <IconWrapper>
              <Icon isOn>
                <QrFlow3 />
              </Icon>
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
