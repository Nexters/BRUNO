import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Icon, { AlarmOn24, Setting24, MainLogo } from '@src/assets/Icon';
import IconButton from '@src/components/shared/IconButton';
import Modal from '@src/components/shared/Modal';
import { UNIMPLEMENT_MODAL_LABEL } from '../shared/const';

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
  const [alarmOpen, setAlarmOpen] = useState(false);

  const handleClickAlarm = () => setAlarmOpen(true);
  const handleClickSetting = () => navigate('/settings');

  return (
    <Container>
      <Icon>
        <MainLogo />
      </Icon>
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
      <Modal open={alarmOpen} label={UNIMPLEMENT_MODAL_LABEL('알람')} onlyYes onClickYes={() => setAlarmOpen(false)} />
    </Container>
  );
}

export default MainHeader;
