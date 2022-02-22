import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useLocation, useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { useCookies } from 'react-cookie';

import { useExecuteContract, Stage, CookieMethod } from '@src/klip';
import { theme } from '@src/assets/styles';

import MainButton from '@src/components/shared/MainButton';
import Input from '@src/components/shared/Input';
import TextArea from '@src/components/shared/TextArea';
import Modal from '@src/components/shared/Modal';
import { useQRcodeModal } from '@src/components/shared/QRcodeModal';
import CategorySection from '@src/components/CategorySection';
import Icon, { Minus24, Plus24 } from '@src/assets/Icon';
import { postCookie } from '@src/queries/cookies';
import { AskStatus, Category, CategoryColor } from '@src/queries/types';
import { getApproval } from '@src/klip/axios';
import { updateAskStatus } from '@src/queries/ask';
import { useLogin, CookieName } from '@src/hooks';
import { ContractError, contractErrorAtom } from '@src/recoil/klip';
import { COOKIE_IMAGE_URLS } from '@src/klip/const';
import { TEXT_MAP, ANSWER_LIMIT, MODAL_LABEL_MAP } from './const';
import { CookieInfo } from './types';

import {
  Wrapper,
  AnswerWrapper,
  Label,
  AnswerGuide,
  HammerPriceWrapper,
  HammerPrice,
  HammerControlButton,
} from './styled';

type Props = {
  isEdit?: boolean;
};

const SHOW_MODAL_STAGES = [Stage.REQUEST_FAIL, Stage.RESULT, Stage.NOT_YET_APPROVE];

type CreateState = { title?: string; askId?: number };

function CreateCookiePage({ isEdit = false }: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const state = (location.state || {}) as CreateState;
  const { userId, isApproval } = useLogin();
  const { isOpen, setOpen, setClose } = useQRcodeModal();
  const [contractError, setError] = useRecoilState(contractErrorAtom);
  const { fetchPrepare, fetchResult, openDeepLink } = useExecuteContract({
    method: CookieMethod.MINT_COOKIE_BY_HAMMER,
    userId,
  });
  const [stage, setStage] = useState<Stage>(Stage.INITIAL);
  const [_, setCookie] = useCookies([CookieName.IS_APPROVAL]);

  const isModalOpen = SHOW_MODAL_STAGES.includes(stage) || contractError !== ContractError.NONE;
  const buttonText = stage === Stage.INITIAL ? TEXT_MAP.request : TEXT_MAP[isEdit ? 'editCookie' : 'makeCookie'];

  const [cookieInfo, setCookieInfo] = useState<CookieInfo>({
    id: undefined,
    title: state.title ?? '',
    contents: '',
    hammer: 1,
    category: 0,
  });

  const [categoryInfo, setCategoryInfo] = useState({ name: '', color: CategoryColor.BLUE });

  const createCookie = async () => {
    const resultFunc = (txHash: string) => postCookie({ ...cookieInfo, txHash, authorUserId: userId });
    const cookieData = await fetchResult(resultFunc);
    if (!cookieData) setStage(Stage.REQUEST_FAIL);
    else {
      const { id } = cookieData;
      setCookieInfo({ ...cookieInfo, id });
      setStage(Stage.RESULT);
      if (state.askId) updateAskStatus(state.askId, AskStatus.ACCEPTED);
    }
  };

  const handleHammerPrice = (add: boolean) => {
    if (!add && cookieInfo.hammer === 1) return null;

    setCookieInfo({
      ...cookieInfo,
      hammer: add ? cookieInfo.hammer + 1 : cookieInfo.hammer - 1,
    });
  };

  const handleClickCategory = (category: Category) => {
    if (!isEdit) {
      setCookieInfo({ ...cookieInfo, category: category.id });
      setCategoryInfo({ name: category.name, color: category.color });
    }
  };

  const handleChangeInput = (key: string, value: string) => {
    setCookieInfo({ ...cookieInfo, [key]: value });
  };

  const handleClickCreate = async () => {
    if (!isApproval) {
      const resultFunc = () => getApproval(userId);
      const approvalResult = await fetchResult(resultFunc);
      if (!approvalResult) {
        setStage(Stage.NOT_YET_APPROVE);
        return;
      }
      setCookie(CookieName.IS_APPROVAL, true);
    }

    if (stage === Stage.INITIAL) {
      const reqKey = await fetchPrepare({
        ...cookieInfo,
        categoryImage: COOKIE_IMAGE_URLS[categoryInfo.color],
        category: categoryInfo.name,
      });

      if (!reqKey) {
        setStage(Stage.REQUEST_FAIL);
        return;
      }

      if (isMobile) {
        openDeepLink(reqKey);
        setStage(Stage.REQUEST);
      } else {
        setOpen();
        setStage(Stage.PREPARE);
        // PC : QRmodal close 시 REQUEST로 set
      }
    } else if (stage === Stage.REQUEST) {
      createCookie();
    }
  };

  const handleClickModal = (yes: boolean) => {
    if (yes) {
      if (stage === Stage.NOT_YET_APPROVE) navigate('/settings');
      else if (contractError === ContractError.INSUFFICIENT_HAMMER) navigate('/users/my');
      else if (contractError === ContractError.NONE || stage === Stage.RESULT) navigate(`/cookie/${cookieInfo.id}`);
      else {
        setError(ContractError.NONE);
        setStage(Stage.INITIAL);
      }
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    if (stage === Stage.PREPARE && !isOpen) {
      setStage(Stage.REQUEST);
    }
  }, [isOpen]);

  useEffect(
    () => () => {
      setError(ContractError.NONE);
      setClose();
    },
    [],
  );

  return (
    <>
      <Wrapper>
        <Input
          value={cookieInfo.title}
          onChange={(value) => handleChangeInput('title', value)}
          label={TEXT_MAP.question}
          placeholder={TEXT_MAP.questionPlaceholder}
          disabled={isEdit}
        />
      </Wrapper>

      <AnswerWrapper>
        <TextArea
          value={cookieInfo.contents}
          onChange={(value) => handleChangeInput('contents', value)}
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
        <CategorySection isEdit={isEdit} setCategory={handleClickCategory} currentCategory={cookieInfo.category} />
        <MainButton value={buttonText} onClick={handleClickCreate} />
        <Modal
          label={contractError === ContractError.NONE ? MODAL_LABEL_MAP[stage] : MODAL_LABEL_MAP[contractError]}
          open={isModalOpen}
          onClickYes={() => handleClickModal(true)}
          onClickNo={() => handleClickModal(false)}
        />
      </Wrapper>
    </>
  );
}

export default CreateCookiePage;
