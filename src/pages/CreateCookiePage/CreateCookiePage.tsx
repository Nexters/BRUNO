import { useState, ChangeEvent } from 'react';

import PageLayout from '@src/components/shared/PageLayout';
import MainButton from '@src/components/shared/MainButton';
import Header from '@src/components/Header';
import Navigation from '@src/components/Navigation';
import {
  Label,
  Section,
  QuestionInput,
  AnswerSection,
  AnswerInput,
  AnswerGuide,
  HammerPriceWrapper,
  HammperPrice,
  HammerControlButton,
  CategoryWrapper,
  CategoryButton,
  CreateButtonStyle,
} from './styled';

const CATEGORIES = [
  '자유',
  '투자정보',
  '비밀',
  '취업정보',
  '연애',
  '19금',
  '맛집탐방',
  '친구',
];

function CreateCookiePage() {
  const [cookieInfo, setCookieInfo] = useState({
    question: '',
    answer: '',
    hammer: 1,
    category: '',
  });

  const handleChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string,
  ) => {
    setCookieInfo({ ...cookieInfo, [key]: e.target.value });
  };

  const handleHammerPrice = (add: boolean) => {
    if (!add && cookieInfo.hammer === 1) return null;
    setCookieInfo(({ hammer, ...rest }) => ({
      ...rest,
      hammer: add ? hammer + 1 : hammer - 1,
    }));
  };

  const handleClickCategory = (value: string) => {
    setCookieInfo({ ...cookieInfo, category: value });
  };

  return (
    <PageLayout>
      <Header />
      <Navigation />
      <Section>
        <Label>질문</Label>
        <QuestionInput
          value={cookieInfo.question}
          placeholder="묻고 싶은 질문을 입력해주세요"
          isEmpty={!cookieInfo.question}
          onChange={(e) => handleChangeInput(e, 'question')}
        />
      </Section>
      <AnswerSection>
        <Label>답변</Label>
        <AnswerInput
          value={cookieInfo.answer}
          placeholder="답변을 입력해주세요"
          hasQuestion={!!cookieInfo.question}
          onChange={(e) => handleChangeInput(e, 'answer')}
        />
        <AnswerGuide>*대답 부분이 쿠키로 만들어질 예정이예요.</AnswerGuide>
      </AnswerSection>
      <Section>
        <Label>망치 가격</Label>
        <HammerPriceWrapper>
          <HammerControlButton onClick={() => handleHammerPrice(false)}>
            -
          </HammerControlButton>
          <HammperPrice>{cookieInfo.hammer}</HammperPrice>
          <HammerControlButton onClick={() => handleHammerPrice(true)}>
            +
          </HammerControlButton>
        </HammerPriceWrapper>
      </Section>
      <Section>
        <Label>카테고리</Label>
        <CategoryWrapper>
          {CATEGORIES.map((value) => (
            <CategoryButton
              key={value}
              isSelected={value === cookieInfo.category}
              onClick={() => handleClickCategory(value)}
            >
              {value}
            </CategoryButton>
          ))}
        </CategoryWrapper>
      </Section>
      <MainButton value="쿠키 만들기" buttonStyle={CreateButtonStyle} />
    </PageLayout>
  );
}

export default CreateCookiePage;
