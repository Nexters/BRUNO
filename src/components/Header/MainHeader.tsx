import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Icon, { AlarmOn24, Setting24 } from '@src/assets/Icon';

import IconButton from '../shared/IconButton';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  border-bottom: 1px solid ${(props) => props.theme.colors.basic.gray20};
`;

const Container = styled(HeaderContainer)`
  color: white;
  justify-content: space-between;
  padding: 12px 16px 12px 20px;
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

  const handleClickAlarm = () => navigate('/alarm');
  const handleClickSetting = () => navigate('/settings');

  return (
    <Container>
      <AppTitle>Cookie Pang</AppTitle>
      <ButtonWrapper>
        <IconButton onClick={handleClickAlarm}>
          <Icon>
            <AlarmOn24 />
          </Icon>
        </IconButton>
        <IconButton onClick={handleClickSetting}>
          <Icon>
            <Setting24 />
          </Icon>
        </IconButton>
      </ButtonWrapper>
    </Container>
  );
}

export default MainHeader;
