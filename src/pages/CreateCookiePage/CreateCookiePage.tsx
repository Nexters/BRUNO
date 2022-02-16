import { useState } from 'react';

import MainButton from '@src/components/shared/MainButton';
import CategoryButton from '@src/components/shared/CategoryButton';
import { CATEGORIES, COLORS } from '@src/components/shared/const';
import Input from '@src/components/shared/Input';
import TextArea from '@src/components/shared/TextArea';
import Icon, { Minus24, Plus24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import { TEXT_MAP, ANSWER_LIMIT } from './const';

import {
  Wrapper,
  AnswerWrapper,
  Label,
  AnswerGuide,
  HammerPriceWrapper,
  HammerPrice,
  HammerControlButton,
  CategoryWrapper,
} from './styled';

type CookieInfo = {
  question: string;
  answer: string;
  hammer: number;
  category: string;
};

function CreateCookiePage() {
  const [cookieInfo, setCookieInfo] = useState<CookieInfo>({
    question: '',
    answer: '',
    hammer: 1,
    category: '',
  });

  const handleHammerPrice = (add: boolean) => {
    if (!add && cookieInfo.hammer === 1) return null;

    setCookieInfo({
      ...cookieInfo,
      hammer: add ? cookieInfo.hammer + 1 : cookieInfo.hammer - 1,
    });
  };

  const handleClickCategory = (value: string) => {
    setCookieInfo({ ...cookieInfo, category: value });
  };

  const handleChangeInput = (key: string, value: string) => {
    setCookieInfo({ ...cookieInfo, [key]: value });
  };

  return (
    <>
      <Wrapper>
        <Input
          value={cookieInfo.question}
          infoKey="question"
          onChange={handleChangeInput}
          label={TEXT_MAP.question}
          placeholder={TEXT_MAP.questionPlaceholder}
        />
      </Wrapper>

      <AnswerWrapper>
        <TextArea
          value={cookieInfo.answer}
          infoKey="answer"
          onChange={handleChangeInput}
          label={TEXT_MAP.answer}
          placeholder={TEXT_MAP.answerPlaceholder}
          limit={ANSWER_LIMIT}
        />
        <AnswerGuide>*{TEXT_MAP.answerInfo}</AnswerGuide>
      </AnswerWrapper>

      <Wrapper>
        <Label>{TEXT_MAP.cost}</Label>
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
        <Label>{TEXT_MAP.category}</Label>
        <CategoryWrapper>
          {CATEGORIES.map((categoryName, index) => (
            <CategoryButton
              // eslint-disable-next-line react/no-array-index-key
              key={`CATEGORY_${index}`}
              category={categoryName}
              color={COLORS[index % COLORS.length]}
              isSelected={false}
              onClick={() => handleClickCategory(categoryName)}
            />
          ))}
        </CategoryWrapper>
        <MainButton value={TEXT_MAP.makeCookie} />
      </Wrapper>
    </>
  );
}

export default CreateCookiePage;
