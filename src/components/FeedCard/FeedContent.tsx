import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Icon, { Comment24, Hammer24, View24 } from '@src/assets/Icon';
import { NFTImage01 } from '@src/assets/images';
import { theme } from '@src/assets/styles';
import { FeedProps } from './type';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 16px;
`;

const BoxWrapper = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #1a1c2c;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 100%;
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize.body01};
  overflow-x: hidden;
`;

const AnswerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 14px;
  margin-left: 20px;
`;

const NumericSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
  margin-top: 16px;
  font-weight: bold;
  font-size: 13px;
  color: ${(props) => props.theme.colors.basic.gray60};
`;

const CookieImage = styled.img`
  width: 160px;
  height: 112px;
  margin-left: 24px;
`;

const InfoText = styled.span`
  margin: 0 8px 0 4px;
`;

export default function FeedContent({ id, question, viewCount, hammer }: FeedProps) {
  const navigate = useNavigate();

  const handleAnswerClick = () => {
    navigate(`/cookie/${id}`);
  };

  return (
    <Wrapper>
      <BoxWrapper>
        <QuestionWrapper>
          <div>Q. {question}</div>
        </QuestionWrapper>
        <AnswerWrapper>
          <Icon color={theme.colors.basic.gray60}>
            <Comment24 />
          </Icon>
          <CookieImage src={NFTImage01} onClick={handleAnswerClick} />
        </AnswerWrapper>
      </BoxWrapper>

      <NumericSection>
        <Icon color={theme.colors.basic.gray60}>
          <View24 />
        </Icon>
        <InfoText>{viewCount}</InfoText>
        <Icon color={theme.colors.basic.gray60}>
          <Hammer24 />
        </Icon>
        <InfoText>{hammer}</InfoText>
      </NumericSection>
    </Wrapper>
  );
}
