import { useNavigate } from 'react-router-dom';
import { theme } from '@src/assets/styles';
import MainButton from '@src/components/shared/MainButton';
import PageLayout from '@src/components/shared/PageLayout';
import styled from 'styled-components';
import { TEXT_MAP } from './const';

const Root = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.head02};
  font-weight: 700;
  white-space: pre-wrap;
  color: ${(props) => props.theme.colors.basic.gray90};
  margin: 86px 0 8px 0;
`;

const Guide = styled.div`
  font-size: ${(props) => props.theme.fontSize.body02};
  white-space: pre-wrap;
  color: ${(props) => props.theme.colors.basic.gray60};
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export default function CompletedMakePage() {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate('/');
  };

  return (
    <PageLayout padding="20px" onlyContents>
      <Root>
        <div>
          <Title>{TEXT_MAP.title}</Title>
          <Guide>{TEXT_MAP.guide}</Guide>
          <div>이미지</div>
        </div>

        <ButtonWrapper>
          <MainButton
            value={TEXT_MAP.buttonHome}
            onClick={handleClickHome}
            buttonStyle={{
              background: theme.colors.basic.gray30,
            }}
          />
          <MainButton value={TEXT_MAP.buttonOpen} onClick={handleClickHome} />
        </ButtonWrapper>
      </Root>
    </PageLayout>
  );
}
