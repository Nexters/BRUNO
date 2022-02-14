import styled from 'styled-components';

import Icon, { AlarmOn24, Setting24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';

import IconButton from '../shared/IconButton';
import SubHeader from '../SubHeader';
import { HeaderPage, HEADER_VALUES } from './const';

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

const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.theme.colors.basic.gray20};
`;

interface Props {
  pageType?: HeaderPage;
}

function Header({ pageType }: Props) {
  const handleClickAlarm = () => {
    console.log('alarm');
  };

  const handleClickSetting = () => {
    console.log('setting');
  };

  if (pageType) return <SubHeader pageType={pageType} />;

  return (
    <>
      <Container>
        <AppTitle>Cookie Pang</AppTitle>

        <ButtonWrapper>
          <IconButton onClick={handleClickAlarm}>
            <Icon color={theme.colors.basic.gray100}>
              <AlarmOn24 />
            </Icon>
          </IconButton>

          <IconButton onClick={handleClickSetting}>
            <Icon color={theme.colors.basic.gray100}>
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
