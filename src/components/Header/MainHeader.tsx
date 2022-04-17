import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { unimplementedModalAtom } from '@src/recoil/ui';
import IconButton from '@src/components/shared/IconButton';
import { useQRcodeModal } from '@src/components/shared/QRcodeModal';
import { LogoImage as logo } from '@src/assets/images';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid ${(props) => props.theme.colors.basic.gray20};

  * {
    z-index: 5;
  }
`;

const Container = styled(HeaderContainer)`
  color: white;
  justify-content: space-between;
  padding: 12px 16px 12px 20px;
`;

const LogoImage = styled.img`
  width: 120px;
  height: 23px;
  cursor: pointer;
`;

export const AppTitle = styled.div`
  font-family: 'Sansita Swashed', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 18px;
`;

function MainHeader() {
  const navigate = useNavigate();
  const { isOpen } = useQRcodeModal();
  const setTodoFeature = useSetRecoilState(unimplementedModalAtom);

  const handleClickAlarm = () => setTodoFeature('알람');
  const handleClickSetting = () => navigate('/settings');

  if (isOpen) return null;

  return (
    <Container>
      <LogoImage src={logo} onClick={() => navigate('/')} />
      <ButtonWrapper>
        <IconButton icon="alarm" size={24} onClick={handleClickAlarm} noFill />
        <IconButton icon="setting" size={24} onClick={handleClickSetting} />
      </ButtonWrapper>
    </Container>
  );
}

export default MainHeader;
