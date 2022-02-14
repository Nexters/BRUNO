import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Icon, { Comment24, Hammer24, View24 } from '@src/assets/Icon';
import { NFTImage01 } from '@src/assets/images';
import { theme } from '@src/assets/styles';
import { FeedProps } from './type';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #1a1c2c;
  border-radius: 8px;
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 100%;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSize.large};
  overflow-x: hidden;
`;

const AnswerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 14px;
  margin-left: 20px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
  font-weight: bold;
  font-size: 13px;
  color: ${(props) => props.theme.colors.basic.gray60};
  margin-top: 16px;
`;

const CookieImage = styled.img`
  width: 160px;
  height: 112px;
  margin-left: 24px;
`;

const InfoText = styled.span`
  margin: 0 8px 0 4px;
`;

export default function FeedContent({
  id,
  question,
  viewCount,
  hammer,
}: FeedProps) {
  const navigate = useNavigate();

  const handleAnswerClick = () => {
    navigate(`/cookie/${id}`);
  };

  return (
    <Wrapper>
      <QuestionWrapper>
        <div>Q.</div>
        <div>{question}</div>
      </QuestionWrapper>

      <AnswerWrapper>
        <Icon color={theme.colors.basic.gray60}>
          <Comment24 />
        </Icon>

        <CookieImage src={NFTImage01} onClick={handleAnswerClick} />
      </AnswerWrapper>

      <InfoWrapper>
        <Icon color={theme.colors.basic.gray60}>
          <View24 />
        </Icon>
        <InfoText>{viewCount}</InfoText>

        <Icon color={theme.colors.basic.gray60}>
          <Hammer24 />
        </Icon>
        <InfoText>{hammer}</InfoText>
      </InfoWrapper>
    </Wrapper>
  );
}
