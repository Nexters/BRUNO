import Icon, { Edit24, Home24, Profile24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import styled from 'styled-components';
import IconButton from '../shared/IconButton';

const Wrapper = styled.nav`
  bottom: 0;
  width: 100%;
  height: 48px;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.gray80};
`;

const WriteButton = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 4px;
  left: calc(50% - 28px);
  width: 56px;
  height: 56px;
  background: linear-gradient(90deg, #e44aeb -2.24%, #142bfc 100%);
  border-radius: 100px;
`;

export default function Navigation() {
  const handleClickHome = () => {
    console.log('home');
  };

  const handleClickWrite = () => {
    console.log('write');
  };
  const handleClickProfile = () => {
    console.log('profile');
  };

  return (
    <Wrapper>
      <IconButton onClick={handleClickHome}>
        <Icon color={theme.colors.gray100}>
          <Home24 />
        </Icon>
      </IconButton>

      <WriteButton onClick={handleClickWrite}>
        <Icon color={theme.colors.gray100}>
          <Edit24 />
        </Icon>
      </WriteButton>

      <IconButton onClick={handleClickProfile}>
        <Icon color={theme.colors.gray100}>
          <Profile24 />
        </Icon>
      </IconButton>
    </Wrapper>
  );
}
