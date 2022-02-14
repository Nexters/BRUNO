import Icon, { Right24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import IconButton from '../shared/IconButton';

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 8px;
  border-bottom: 1px solid ${(props) => props.theme.colors.basic.gray20};
`;

const HeaderTitle = styled.div`
  margin-left: 8px;
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.colors.basic.gray90};
`;

interface Props {
  headerTitle: string;
}

function SubHeader({ headerTitle }: Props) {
  const navigate = useNavigate();
  const handleClickBack = () => navigate(-1);

  return (
    <Container>
      <IconButton onClick={handleClickBack}>
        <Icon color={theme.colors.basic.gray100}>
          <Right24 />
        </Icon>
      </IconButton>
      <HeaderTitle>{headerTitle}</HeaderTitle>
    </Container>
  );
}

export default SubHeader;
