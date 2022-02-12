import { useState } from 'react';

import MainButton from '@src/components/shared/MainButton';
import CategoryButton from '@src/components/shared/CategoryButton';
import { CATEGORIES, COLORS } from '@src/components/shared/const';
import Icon, { Minus24, Plus24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import Input from '@src/components/shared/Input';
import TextArea from '@src/components/shared/TextArea';
import { TEXT_MAP } from './const';

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

function CreateCookiePage() {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [hammer, setHammer] = useState<number>(1);
  const [category, setCategory] = useState<string>('');

  const handleHammerPrice = (add: boolean) => {
    if (!add && hammer === 1) return null;

    if (add) {
      setHammer(hammer + 1);
    } else {
      setHammer(hammer - 1);
    }
  };

  const handleClickCategory = (value: string) => {
    setCategory(value);
  };

  return (
    <>
      <Wrapper>
        <Input
          value={question}
          onChange={setQuestion}
          label={TEXT_MAP.question}
          placeholder={TEXT_MAP.questionPlaceholder}
          limit={25}
        />
      </Wrapper>

      <AnswerWrapper>
        <TextArea
          value={answer}
          onChange={setAnswer}
          label={TEXT_MAP.answer}
          placeholder={TEXT_MAP.answerPlaceholder}
          limit={50}
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
          <HammerPrice>{hammer}</HammerPrice>
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
