import { useState, ChangeEvent } from 'react';

import PageLayout from '@src/components/shared/PageLayout';
import MainButton from '@src/components/shared/MainButton';
import CategoryButton from '@src/components/shared/CategoryButton';
import { CATEGORIES, COLORS } from '@src/components/shared/const';
import Icon, { Minus24, Plus24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import { LABEL_TEXT_MAP } from './const';

import {
  Wrapper,
  AnswerWrapper,
  Label,
  QuestionInput,
  AnswerInput,
  AnswerGuide,
  HammerPriceWrapper,
  HammerPrice,
  HammerControlButton,
  CategoryWrapper,
} from './styled';

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

  // const handleClickCategory = (value: string) => {
  //   setCookieInfo({ ...cookieInfo, category: value });
  // };

  return (
    <PageLayout>
      <Wrapper>
        <Label>{LABEL_TEXT_MAP.question}</Label>
        <QuestionInput
          value={cookieInfo.question}
          isEmpty={!cookieInfo.question}
          onChange={(e) => handleChangeInput(e, 'question')}
        />
      </Wrapper>

      <AnswerWrapper>
        <Label>{LABEL_TEXT_MAP.answer}</Label>
        <AnswerInput
          value={cookieInfo.answer}
          hasQuestion={!!cookieInfo.question}
          onChange={(e) => handleChangeInput(e, 'answer')}
        />
        <AnswerGuide>*Answer is converted into cookies.</AnswerGuide>
      </AnswerWrapper>

      <Wrapper>
        <Label>{LABEL_TEXT_MAP.cost}</Label>
        <HammerPriceWrapper>
          <HammerControlButton onClick={() => handleHammerPrice(false)}>
            <Icon color={theme.colors.basic.gray10}>
              <Minus24 />
            </Icon>
          </HammerControlButton>
          <HammerPrice>{cookieInfo.hammer}</HammerPrice>
          <HammerControlButton onClick={() => handleHammerPrice(true)}>
            <Icon color={theme.colors.basic.gray10}>
              <Plus24 />
            </Icon>
          </HammerControlButton>
        </HammerPriceWrapper>
      </Wrapper>

      <Wrapper>
        <Label>{LABEL_TEXT_MAP.category}</Label>
        <CategoryWrapper>
          {CATEGORIES.map((category, index) => (
            <CategoryButton
              // eslint-disable-next-line react/no-array-index-key
              key={`CATEGORY_${index}`}
              category={category}
              color={COLORS[index % COLORS.length]}
              isSelected={false}
            />
          ))}
        </CategoryWrapper>
        <MainButton value="Make a Cookie" />
      </Wrapper>
    </PageLayout>
  );
}

export default CreateCookiePage;
