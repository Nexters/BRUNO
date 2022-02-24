import styled from 'styled-components';

import Icon, { Comment24, Hammer24, View24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import { CookieFeedItem } from '@src/queries/types';
import NFTCookie from '@src/components/shared/NFTCookie';

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
  const { cookieId, question, price, viewCount, category } = cookie;

  return (
    <Wrapper>
      <BoxWrapper>
        <QuestionWrapper>
          <div>Q. {question}</div>
        </QuestionWrapper>
        <AnswerWrapper>
          <Icon color={theme.colors.basic.gray60} style={{ marginBottom: 'auto' }}>
            <Comment24 />
          </Icon>
          <NFTCookie cookieId={cookieId} categoryId={category.id} width="160px" />
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
        <InfoText>{price}</InfoText>
      </NumericSection>
    </Wrapper>
  );
}
