import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Icon, { Right24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import { HeaderPage, HEADER_VALUES } from '@src/components/Header/const';
import { HeaderContainer } from '@src/components/Header/MainHeader';
import IconButton from '@src/components/shared/IconButton';

const Container = styled(HeaderContainer)`
  padding: 8px;
`;

const HeaderTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.colors.basic.gray90};
  button + & {
    margin-left: 8px;
  }
`;

interface Props {
  pageType: HeaderPage;
}

function SubHeader({ pageType }: Props) {
  const navigate = useNavigate();
  const header = HEADER_VALUES[pageType];
  const { left, center } = header;
  const handleClickBack = () => navigate(-1);

  return (
    <Container>
      {left && (
        <IconButton onClick={handleClickBack}>
          <Icon color={theme.colors.basic.gray100}>
            <Right24 />
          </Icon>
        </IconButton>
      )}
      <HeaderTitle>{center}</HeaderTitle>
    </Container>
  );
}

export default SubHeader;
