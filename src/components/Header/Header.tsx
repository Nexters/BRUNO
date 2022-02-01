import Icon, { AlarmOn24, Setting24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import styled from 'styled-components';
import IconButton from '../shared/IconButton';

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  color: white;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 18px;
`;

function Header() {
  const handleClickAlarm = () => {
    console.log('alarm');
  };

  const handleClickSetting = () => {
    console.log('setting');
  };

  return (
    <Container>
      <div>CookiePang</div>

      <ButtonWrapper>
        <IconButton onClick={handleClickAlarm}>
          <Icon color={theme.colors.gray100}>
            <AlarmOn24 />
          </Icon>
        </IconButton>

        <IconButton onClick={handleClickSetting}>
          <Icon color={theme.colors.gray100}>
            <Setting24 />
          </Icon>
        </IconButton>
      </ButtonWrapper>
    </Container>
  );
}

export default Header;
