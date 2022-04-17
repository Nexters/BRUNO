import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import IconButton from '../shared/IconButton';

const Root = styled.nav`
  bottom: 0;
  position: fixed;
  width: 100%;
  max-width: 700px;
  height: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${(props) => props.theme.colors.basic.gray10};
`;

const ButtonWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const WriteButton = styled.button`
  position: absolute;
  bottom: 15px;
  left: calc(50% - 28px);
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background: linear-gradient(90deg, #e44aeb -2.24%, #142bfc 100%);
  cursor: pointer;
`;

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';
  const isProfile = location.pathname.includes('/users');

  const handleClickHome = () => navigate('/');
  const handleClickWrite = () => navigate('/create/cookie');
  const handleClickProfile = () => navigate('/users/my');

  return (
    <>
      <Root>
        <ButtonWrapper>
          <IconButton
            icon="home"
            size={24}
            color={theme.colors.basic.gray90}
            noFill={!isHome}
            onClick={handleClickHome}
          />
        </ButtonWrapper>

        <ButtonWrapper>
          <IconButton
            icon="profile"
            size={24}
            color={theme.colors.basic.gray90}
            noFill={!isProfile}
            onClick={handleClickProfile}
          />
        </ButtonWrapper>
      </Root>

      <WriteButton onClick={handleClickWrite}>
        <Icon icon="plus18" size={24} color={theme.colors.basic.gray90} />
      </WriteButton>
    </>
  );
}
