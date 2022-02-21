import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderPage } from '@src/components/Header/const';
import MainButton from '@src/components/shared/MainButton';
import PageLayout from '@src/components/shared/PageLayout';
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
  margin: 10px 0 8px 0;
`;

const Guide = styled.div`
  font-size: ${(props) => props.theme.fontSize.body02};
  white-space: pre-wrap;
  color: ${(props) => props.theme.colors.basic.gray60};
`;

function TutorialPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(0);

  const handleClickButton = () => {
    if (step === TEXT_MAP.length - 1) {
      navigate('/tutorial/completed');
    } else {
      setStep(step + 1);
    }
  };

  return (
    <PageLayout padding="20px" pageType={HeaderPage.TUTORIAL} onlyContents>
      <Root>
        <div>
          <Title>{TEXT_MAP[step].title}</Title>
          <Guide>{TEXT_MAP[step].guide}</Guide>
          <div>이미지</div>
        </div>

        <div>
          <MainButton value={TEXT_MAP[step].button} onClick={handleClickButton} />
        </div>
      </Root>
    </PageLayout>
  );
}

export default TutorialPage;
