import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { HeaderPage, HEADER_VALUES } from '@src/components/Header/const';
import { HeaderContainer } from '@src/components/Header/MainHeader';
import IconButton from '@src/components/shared/IconButton';
import { useQRcodeModal } from '../shared/QRcodeModal';

const Container = styled(HeaderContainer)`
  padding: 8px;
  display: flex;
  flex-direction: row;
  z-index: 10;
`;

const RightWrapper = styled.div`
  margin-left: auto;
`;

const LeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  -webkit-transform: translateZ(1px);
  -moz-transform: translateZ(1px);
  -o-transform: translateZ(1px);
  transform: translateZ(1px);
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
      <LeftWrapper>
        {left && <IconButton icon="right" size={24} noFill onClick={handleClickBack} />}
        <HeaderTitle>{center}</HeaderTitle>
      </LeftWrapper>

      <RightWrapper>
        {right && pageType === HeaderPage.TUTORIAL && <SkipButton onClick={handleClickSkip}>건너뛰기</SkipButton>}
      </RightWrapper>
    </Container>
  );
}

export default SubHeader;
