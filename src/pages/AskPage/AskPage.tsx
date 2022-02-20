import { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { categoryListSelector } from '@src/recoil/category/selectors';
import CategoryButton from '@src/components/shared/CategoryButton';
import MainButton from '@src/components/shared/MainButton';
import Input from '@src/components/shared/Input';

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
  margin-top: 16px;
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
  const categoryList = useRecoilValue(categoryListSelector);
  const [askData, setAskData] = useState({
    question: '',
    category: '',
  });

  const handleChangeQuestion = (value: string) => {
    setAskData({ ...askData, question: value });
  };

  return (
    <Wrapper>
      <UserName>@Username15texts</UserName>
      <Section>
        <Title>Question</Title>
        <Input
          value={askData.question}
          onChange={handleChangeQuestion}
          placeholder="질문을 입력하세요."
        />
        <From>From. Anonymous</From>
      </Section>
      <Section>
        <Title>Categories</Title>
        <CategorySection>
          {categoryList.map((category, index) => (
            <CategoryButton
              key={category.categoryId}
              category={category}
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
