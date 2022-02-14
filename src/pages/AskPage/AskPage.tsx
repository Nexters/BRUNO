import styled from 'styled-components';

import CategoryButton from '@src/components/shared/CategoryButton';
import { CATEGORIES, COLORS } from '@src/components/shared/const';
import MainButton from '@src/components/shared/MainButton';

const Wrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  color: ${(props) => props.theme.colors.basic.gray90};
`;

const UserName = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Section = styled.div`
  margin-top: 16px;
`;

const From = styled.div`
  text-align: right;
  color: ${(props) => props.theme.colors.basic.gray50};
`;

const Title = styled.div`
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 13px;
`;

const CategorySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const ButtonWrapper = styled.div`
  margin-top: auto;
`;

function AskPage() {
  return (
    <Wrapper>
      <UserName>@Username15texts</UserName>
      <Section>
        <Title>Question</Title>
        {/* TODO : input 추가 */}
        <From>From. Anonymous</From>
      </Section>
      <Section>
        <Title>Categories</Title>
        <CategorySection>
          {CATEGORIES.map((category, index) => (
            <CategoryButton
              // eslint-disable-next-line react/no-array-index-key
              key={`CATEGORY_${index}`}
              category={category}
              color={COLORS[index % COLORS.length]}
              isSelected={false}
            />
          ))}
        </CategorySection>
      </Section>
      <ButtonWrapper>
        <MainButton value="쿠키 만들기" buttonStyle={{ margin: 0 }} />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default AskPage;
