import { useRecoilState, useRecoilValue } from 'recoil';
import QRCode from 'react-qr-code';

import Icon, { Right24 } from '@src/assets/Icon';
import IconButton from '@src/components/shared/IconButton';
import { klipRequestKeyAtom } from '@src/recoil/klip';
import { QRcodeModalAtom } from '@src/recoil/ui';
import { Wrapper, Box, Header, ContentWrapper, Title, Timer, Guide, QRcodeWrapper } from './styled';

function QRcodeModal() {
  const request = useRecoilValue(klipRequestKeyAtom);
  const [isOpen, setOpen] = useRecoilState(QRcodeModalAtom);
  const qrcode = `https://klipwallet.com/?target=/a2a?request_key=${request.requestKey}`;

  if (!isOpen || !request.requestKey) return null;

  return (
    <Wrapper>
      <Box>
        <Header>
          <IconButton onClick={() => setOpen(false)}>
            <Icon style={{ marginRight: '8px' }}>
              <Right24 />
            </Icon>
          </IconButton>
          QR로그인
        </Header>
        <ContentWrapper>
          <Title>카카오 Klip QR 연결</Title>
          {/* <Timer>남은 시간</Timer> */}
          <QRcodeWrapper>
            <QRCode value={qrcode} size={150} />
          </QRcodeWrapper>
          <Guide>{`QR 코드 리더기 또는 카카오 앱을 통해\nQR 코드를 스캔해주세요.`}</Guide>
        </ContentWrapper>
      </Box>
    </Wrapper>
  );
}

export default QRcodeModal;
