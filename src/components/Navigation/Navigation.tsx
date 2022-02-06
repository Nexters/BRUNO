import Icon, { Edit24, Home24, Profile24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from '../shared/IconButton';

const Wrapper = styled.nav`
  bottom: 0;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 48px;
  background-color: ${(props) => props.theme.colors.gray10};
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
  border-radius: 100px;
  background: linear-gradient(90deg, #e44aeb -2.24%, #142bfc 100%);
  cursor: pointer;
`;

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate('/');
  };

  const handleClickWrite = () => {
    if (location.pathname !== '/create') {
      navigate('/create');
    }
  };
  const handleClickProfile = () => {
    if (location.pathname !== '/user') {
      navigate('/user/me');
    }
  };

  return (
    <>
      <Wrapper>
        <ButtonWrapper>
          <IconButton onClick={handleClickHome}>
            <Icon color={theme.colors.gray100}>
              <Home24 />
            </Icon>
          </IconButton>
        </ButtonWrapper>

        <ButtonWrapper>
          <IconButton onClick={handleClickProfile}>
            <Icon color={theme.colors.gray100}>
              <Profile24 />
            </Icon>
          </IconButton>
        </ButtonWrapper>
      </Wrapper>

      <WriteButton onClick={handleClickWrite}>
        <Icon color={theme.colors.gray100}>
          <Edit24 />
        </Icon>
      </WriteButton>
    </>
  );
}
