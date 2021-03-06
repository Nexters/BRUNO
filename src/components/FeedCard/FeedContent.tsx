import styled from 'styled-components';

import Icon from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import { CookieFeedItem } from '@src/queries/types';
import NFTCookie from '@src/components/shared/NFTCookie';
import { useNavigate } from 'react-router-dom';
import ContentCard from '../ContentCard';

const Wrapper = styled.div`
  width: 100%;
  margin-top: 16px;
`;

const BoxWrapper = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.basic.gray20};
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

const Question = styled.div`
  ${theme.text.ellipsis(1)}
`;

const AnswerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 14px;
  margin-left: 20px;
  cursor: pointer;
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

const InfoText = styled.span`
  margin: 0 8px 0 4px;
`;

type Props = {
  cookie: CookieFeedItem;
};

export default function FeedContent({ cookie }: Props) {
  const navigate = useNavigate();
  const { cookieId, question, price, viewCount, category, myCookie, answer } = cookie;

  return (
    <Wrapper>
      <BoxWrapper>
        <QuestionWrapper>
          <Question>Q. {question}</Question>
        </QuestionWrapper>
        <AnswerWrapper onClick={() => navigate(`/cookie/${cookieId}`)}>
          <Icon icon="comment" size={24} color={theme.colors.basic.gray60} noFill />
          {myCookie ? (
            <ContentCard content={answer} categoryColor={category.color} />
          ) : (
            <NFTCookie categoryColor={category.color} width="160px" />
          )}
        </AnswerWrapper>
      </BoxWrapper>

      <NumericSection>
        <Icon icon="view" size={24} color={theme.colors.basic.gray60} noFill />
        <InfoText>{viewCount}</InfoText>
        <Icon icon="hammer" size={24} color={theme.colors.basic.gray60} noFill />
        <InfoText>{price}</InfoText>
      </NumericSection>
    </Wrapper>
  );
}
