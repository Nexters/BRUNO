import { useRecoilState, useRecoilValue } from 'recoil';
import QRCode from 'react-qr-code';

import Icon from '@src/assets/Icon';
import { QrFlow1, QrFlow2, QrFlow3 } from '@src/assets/images';
import IconButton from '@src/components/shared/IconButton';
import { klipRequestKeyAtom } from '@src/recoil/klip';
import { QRcodeModalAtom } from '@src/recoil/ui';
import { theme } from '@src/assets/styles';
import {
  Wrapper,
  Box,
  Header,
  ContentWrapper,
  Title,
  // Timer,
  Guide,
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
    <Wrapper>
      <Box>
        <Header>
          <IconButton icon="right" size={24} color={theme.colors.basic.gray100} noFill onClick={() => setOpen(false)} />
          QR로그인
        </Header>
        <ContentWrapper>
          <Title>카카오 Klip QR 연결</Title>
          {/* <Timer>남은 시간</Timer> */}
          <QRcodeWrapper>
            <QRCode value={qrcode} size={150} />
          </QRcodeWrapper>
          <Guide>{`QR 코드 리더기 또는 카카오 앱을 통해\nQR 코드를 스캔해주세요.`}</Guide>
          <GuideIconWrapper>
            <IconWrapper>
              <QrFlow1 />
              <span>카카오톡 실행</span>
            </IconWrapper>

            <Icon icon="left" size={24} color={theme.colors.basic.gray50} noFill />
            <IconWrapper>
              <QrFlow2 />
              <span>상단 검색창 클릭</span>
            </IconWrapper>
            <Icon icon="left" size={24} color={theme.colors.basic.gray50} noFill />
            <IconWrapper>
              <QrFlow3 />
              <span>코드 스캔 후 로그인</span>
            </IconWrapper>
          </GuideIconWrapper>
        </ContentWrapper>
      </Box>
    </Wrapper>
  );
}

export default QRcodeModal;
