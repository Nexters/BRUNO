import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Icon, { Right24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import { HeaderPage, HEADER_VALUES } from '@src/components/Header/const';
import { HeaderContainer } from '@src/components/Header/MainHeader';
import IconButton from '@src/components/shared/IconButton';
import { useQRcodeModal } from '../shared/QRcodeModal';

const Container = styled(HeaderContainer)`
  padding: 8px;
  display: flex;
  flex-direction: row;
`;

const RightWrapper = styled.div`
  margin-left: auto;
`;

const HeaderTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: ${(props) => props.theme.colors.basic.gray90};
  button + & {
    margin-left: 8px;
  }
`;

const SkipButton = styled.button`
  margin-right: 8px;
  background-color: transparent;
  font-size: ${(props) => props.theme.fontSize.body02};
  font-weight: 700;
  color: ${(props) => props.theme.colors.basic.gray90};
`;

interface Props {
  pageType: HeaderPage;
}

function SubHeader({ pageType }: Props) {
  const navigate = useNavigate();
  const header = HEADER_VALUES[pageType];
  const { left, center, right } = header;
  const { isOpen } = useQRcodeModal();

  const handleClickBack = () => navigate(-1);
  const handleClickSkip = () => navigate('/');

  if (isOpen) return null;

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

      <RightWrapper>
        {right && pageType === HeaderPage.TUTORIAL && <SkipButton onClick={handleClickSkip}>건너뛰기</SkipButton>}
      </RightWrapper>
    </Container>
  );
}

export default SubHeader;
