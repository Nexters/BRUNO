import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HeaderPage } from '@src/components/Header/const';
import MainButton from '@src/components/shared/MainButton';
import PageLayout from '@src/components/shared/PageLayout';
import { TEXT_MAP, IMAGE_MAP } from './const';

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

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 29px;

  img {
    width: 100%;
    max-width: 477px;
  }
`;

const ButtonWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    max-width: 700px;
    padding: 20px;
  }
`;

function TutorialPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(0);

  const handleClickButton = () => {
    if (step === TEXT_MAP.length - 1) {
      navigate('/');
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
          <ImageWrapper>
            <img src={IMAGE_MAP[step]} alt={`tutorial_step${step}_image`} />
          </ImageWrapper>
        </div>

        <ButtonWrapper>
          <MainButton value={TEXT_MAP[step].button} onClick={handleClickButton} />
        </ButtonWrapper>
      </Root>
    </PageLayout>
  );
}

export default TutorialPage;
