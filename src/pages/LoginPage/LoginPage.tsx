import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import QRCode from 'react-qr-code';

import PageLayout from '@src/components/shared/PageLayout';
import MainButton from '@src/components/shared/MainButton';
import { useKlipPrepare, useKlipLogin } from '@src/klip';
import { getKlipQrcodeSelector } from '@src/recoil/auth';

const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

function LoginPage() {
  const { isFetched } = useKlipPrepare();
  const { refetch: klipLogin } = useKlipLogin();
  const qrcode = useRecoilValue(getKlipQrcodeSelector);

  return (
    <PageLayout padding="40px 20px" layoutStyle={{ display: 'flex' }}>
      <BottomWrapper>
        {isFetched && <QRCode value={qrcode} size={100} />}
        <MainButton
          onClick={klipLogin}
          value="Connect With Kakao Klip"
          buttonStyle={{ margin: 0 }}
        />
      </BottomWrapper>
    </PageLayout>
  );
}

export default LoginPage;
