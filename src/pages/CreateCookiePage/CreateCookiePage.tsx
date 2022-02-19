import { useEffect, useState } from 'react';

import MainButton from '@src/components/shared/MainButton';
import CategoryButton from '@src/components/shared/CategoryButton';
import { CATEGORIES, COLORS } from '@src/components/shared/const';
import Input from '@src/components/shared/Input';
import TextArea from '@src/components/shared/TextArea';
import Icon, { Minus24, Plus24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import { useExecuteContract, Stage } from '@src/klip';
import { useQRcodeModal } from '@src/components/shared/QRcodeModal';
import Modal from '@src/components/shared/Modal';
import { useNavigate } from 'react-router-dom';
import { TEXT_MAP, ANSWER_LIMIT, MODAL_LABEL_MAP } from './const';

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

type Props = {
  isEdit?: boolean;
};

type CookieInfo = {
  id?: number;
  title: string;
  contents: string;
  hammer: number;
  category: string;
};

function CreateCookiePage({ isEdit = false }: Props) {
  const navigate = useNavigate();
  const { isOpen, setOpen } = useQRcodeModal();
  const { fetchPrepare, fetchResult } = useExecuteContract();
  const [stage, setStage] = useState<Stage>(Stage.INITIAL);

  const isModalOpen = stage === Stage.REQUEST_FAIL || stage === Stage.RESULT;
  const buttonText =
    stage === Stage.INITIAL
      ? TEXT_MAP.request
      : TEXT_MAP[isEdit ? 'editCookie' : 'makeCookie'];

  const [cookieInfo, setCookieInfo] = useState<CookieInfo>({
    id: undefined,
    title: '',
    contents: '',
    hammer: 1,
    category: '',
  });

  const createCookie = async () => {
    const cookieData = await fetchResult(cookieInfo);
    if (!cookieData) setStage(Stage.REQUEST_FAIL);
    else {
      const { id } = cookieData;
      setCookieInfo({ ...cookieInfo, id });
      setStage(Stage.RESULT);
    }
  };

  const handleHammerPrice = (add: boolean) => {
    if (!add && cookieInfo.hammer === 1) return null;

    setCookieInfo({
      ...cookieInfo,
      hammer: add ? cookieInfo.hammer + 1 : cookieInfo.hammer - 1,
    });
  };

  const handleChangeInput = (key: string, value: string) => {
    setCookieInfo({ ...cookieInfo, [key]: value });
  };

  const handleClickCreate = async () => {
    // 사용자가 정보를 입력하고 버튼 클릭
    if (stage === Stage.INITIAL) {
      await fetchPrepare(cookieInfo);
      setOpen();
      setStage(Stage.PREPARE);
    } else if (stage === Stage.REQUEST) {
      createCookie();
    }
  };

  const handleClickModal = (yes: boolean) => {
    if (yes) {
      if (stage === Stage.RESULT) navigate(`/cookie/${cookieInfo.id}`);
      else setStage(Stage.INITIAL);
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    if (stage === Stage.PREPARE && !isOpen) {
      setStage(Stage.REQUEST);
    }
  }, [isOpen]);

  return (
    <>
      <Wrapper>
        <Input
          value={cookieInfo.title}
          infoKey="title"
          onChange={handleChangeInput}
          label={TEXT_MAP.question}
          placeholder={TEXT_MAP.questionPlaceholder}
          limit={25}
          disabled={isEdit}
        />
      </Wrapper>

      <AnswerWrapper>
        <TextArea
          value={cookieInfo.contents}
          infoKey="contents"
          onChange={handleChangeInput}
          label={TEXT_MAP.answer}
          placeholder={TEXT_MAP.answerPlaceholder}
          limit={ANSWER_LIMIT}
          disabled={isEdit}
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
              isSelected={cookieInfo.category === categoryName}
              onClick={() => handleChangeInput('category', categoryName)}
              disabled={isEdit}
            />
          ))}
        </CategoryWrapper>
        <MainButton value={buttonText} onClick={handleClickCreate} />
        <Modal
          label={MODAL_LABEL_MAP[stage] || null}
          open={isModalOpen}
          onClickYes={() => handleClickModal(true)}
          onClickNo={() => handleClickModal(false)}
        />
      </Wrapper>
    </>
  );
}

export default CreateCookiePage;
