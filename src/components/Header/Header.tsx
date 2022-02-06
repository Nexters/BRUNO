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
  height: 69px;
  padding: 12px 16px 25px 16px;
  color: white;
`;

const AppTitle = styled.div`
  font-family: 'Sansita Swashed', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 18px;
`;

const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.gray20};
`;

function Header() {
  const handleClickAlarm = () => {
    console.log('alarm');
  };

  const handleClickSetting = () => {
    console.log('setting');
  };

  return (
    <>
      <Container>
        <AppTitle>Cookie Pang</AppTitle>

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
      <Border />
    </>
  );
}

export default Header;
