import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { isMobile } from 'react-device-detect';

import { theme } from '@src/assets/styles';
import Icon from '@src/assets/Icon';
import { ProfileImage01, ProfileImage02 } from '@src/assets/images';
import { CookieDetail, CookieStatus } from '@src/queries/types';
import CookieHistorySection from '@src/components/CookieHistorySection';
import NFTCookie from '@src/components/shared/NFTCookie';
import ContentCard from '@src/components/ContentCard';
import MainButton from '@src/components/shared/MainButton';
import Modal from '@src/components/shared/Modal';
import { useQRcodeModal } from '@src/components/shared/QRcodeModal';

import {
  deleteCookie as _deleteCookie,
  updateCookieStatus,
  UpdateCookieStatusArgs,
  buyCookie as _buyCookie,
  BuyCookieArgs,
} from '@src/queries/cookies';
import { ContractError, contractErrorAtom, klipRequestKeyAtom } from '@src/recoil/klip';
import { useLogin } from '@src/hooks';
import { CookieMethod, useExecuteContract } from '@src/klip';
import { DetailModalState, DETAIL_MODAL_LABEL, ERROR_MODAL_LABEL } from './const';
import {
  AnswerWrapper,
  CookieArea,
  CookieInfoArea,
  CookieInfoWrapper,
  CreatorArea,
  Hammer,
  HammerCount,
  HammerUnit,
  HammerWrapper,
  ProfileWrapper,
  QuestionWrapper,
  Title,
  UserImage,
  UserInfoWrapper,
  UserName,
  MyButtonWrapper,
} from './styled';

type Props = {
  data: CookieDetail;
  refetch: () => void;
};

const getButtonText = (myCookie: boolean, status: CookieStatus) => {
  if (status === CookieStatus.HIDDEN) return '이 쿠키는 숨겨졌어요.';
  return myCookie ? '가격 정보 수정하기' : '쿠키 구매하기';
};

function CookieDetails({ data, refetch }: Props) {
  const {
    cookieId,
    question,
    answer,
    price,
    histories,
    creatorId,
    creatorProfileUrl,
    collectorId,
    collectorName,
    collectorProfileUrl,
    category,
    creatorName,
    nftTokenId,
    contractAddress,
    cookieStatus,
    myCookie,
  } = data;
  const navigate = useNavigate();
  const buyMutation = useMutation((data: BuyCookieArgs) => _buyCookie(data));
  const deleteMutation = useMutation((cookieId: number | string) => _deleteCookie(cookieId));
  const updateStatusMutation = useMutation((data: UpdateCookieStatusArgs) => updateCookieStatus(data));

  const [modalState, setModalState] = useState<DetailModalState>(DetailModalState.NONE);
  const [contractError, setError] = useRecoilState(contractErrorAtom);
  const klipData = useRecoilValue(klipRequestKeyAtom);
  const { isOpen, setOpen, setClose } = useQRcodeModal();

  const { userId } = useLogin();
  const isActive = cookieStatus === CookieStatus.ACTIVE;
  const isAvailableBuy = !myCookie && isActive;
  const buttonText = getButtonText(myCookie, cookieStatus);
  const handleClickButton = (nextState: DetailModalState) => setModalState(nextState);
  const { fetchPrepare, fetchResult, openDeepLink } = useExecuteContract({
    method: CookieMethod.BUY_COOKIE,
    userId,
  });

  const fetchBuyResult = async () => {
    let txHash = '';
    const resultCb = (_txHash: string) => {
      txHash = _txHash;
      return true;
    };
    const isSuccess = await fetchResult(resultCb);
    if (!isSuccess) {
      setError(ContractError.REQUEST_FAIL);
      return;
    }

    buyMutation.mutate(
      { cookieId, purchaserUserId: userId as number, txHash },
      {
        onSuccess: () => setModalState(DetailModalState.BUY_RESULT),
      },
    );
  };

  const buyCookieReady = async () => {
    // 처음 클릭
    if (modalState === DetailModalState.NONE) {
      const reqKey = await fetchPrepare({ cookieId, nftTokenId });
      if (!reqKey) {
        setError(ContractError.REQUEST_FAIL);
        return;
      }
      setModalState(DetailModalState.BUY);
    } else if (modalState === DetailModalState.BUY_REQUEST) {
      fetchBuyResult();
    }
  };

  const buyCookie = async () => {
    if (isMobile) {
      openDeepLink(klipData.requestKey);
      setModalState(DetailModalState.BUY_REQUEST);
    } else {
      setModalState(DetailModalState.BUY_PREPARE);
      setOpen();
    }
  };

  const deleteCookie = async () => {
    // TODO burnCookie
    await deleteMutation.mutate(cookieId, {
      onSuccess: () => navigate('/'),
    });
  };

  const updateStatus = async () => {
    await updateStatusMutation.mutate(
      { cookieId, status: isActive ? CookieStatus.HIDDEN : CookieStatus.ACTIVE },
      {
        onSuccess: () => {
          setModalState(DetailModalState.NONE);
          refetch();
        },
      },
    );
  };

  const handleClickErrorModalYes = () => {
    setModalState(DetailModalState.NONE);
    setError(ContractError.NONE);
    if (contractAddress === ContractError.INSUFFICIENT_HAMMER || contractAddress === ContractError.APPROVAL_ERROR)
      navigate('/settings');
  };

  const MODAL_YES_FUNC: { [key in string]: () => void } = {
    [DetailModalState.DELETE]: deleteCookie,
    [DetailModalState.BUY]: buyCookie,
    [DetailModalState.BUY_RESULT]: () => {
      setModalState(DetailModalState.NONE);
      refetch();
    },
  };

  useEffect(() => {
    if (modalState === DetailModalState.BUY_PREPARE && !isOpen) {
      setModalState(DetailModalState.BUY_REQUEST);
    }
  }, [isOpen]);

  useEffect(
    () => () => {
      setError(ContractError.NONE);
      setClose();
    },
    [],
  );

  useEffect(() => {
    if (modalState === DetailModalState.BUY_REQUEST && !isMobile) {
      fetchBuyResult();
    }
  }, [modalState]);

  return (
    <>
      <CookieArea>
        <QuestionWrapper>
          <div>Q. {question}</div>
        </QuestionWrapper>

        <AnswerWrapper>
          <Icon icon="comment" size={24} color={theme.colors.basic.gray60} noFill />
          {myCookie ? (
            <ContentCard content={answer} categoryColor={category.color} />
          ) : (
            <NFTCookie categoryColor={category.color} width="100%" />
          )}
        </AnswerWrapper>

        <HammerWrapper>
          <Hammer>망치</Hammer>
          <HammerCount>
            <Icon icon="hammer" size={24} color={theme.colors.basic.gray60} noFill />
            {price}
            <HammerUnit>톤</HammerUnit>
          </HammerCount>
        </HammerWrapper>
        <MainButton
          value={buttonText}
          disabled={!isAvailableBuy}
          onClick={() => {
            if (isAvailableBuy) buyCookieReady();
          }}
        />
      </CookieArea>

      <CreatorArea>
        <ProfileWrapper onClick={() => navigate(`/users/${collectorId}`)}>
          <Title>쿠키 소유자</Title>
          <UserInfoWrapper>
            <UserImage src={collectorProfileUrl || ProfileImage01} />
            <UserName>{collectorName}</UserName>
          </UserInfoWrapper>
        </ProfileWrapper>

        <ProfileWrapper onClick={() => navigate(`/users/${creatorId}`)}>
          <Title>쿠키 제작자</Title>
          <UserInfoWrapper>
            <UserImage src={creatorProfileUrl || ProfileImage02} />
            <UserName>{creatorName}</UserName>
          </UserInfoWrapper>
        </ProfileWrapper>
      </CreatorArea>

      <CookieInfoArea>
        <Title>쿠키 정보</Title>
        <CookieInfoWrapper>
          <span>계약 주소</span>
          <span>{`${contractAddress.slice(0, 20)}...`}</span>
        </CookieInfoWrapper>
        <CookieInfoWrapper>
          <span>토큰 주소</span>
          <span>{nftTokenId}</span>
        </CookieInfoWrapper>

        <Title style={{ marginTop: '20px' }}>쿠키 히스토리</Title>
        <CookieHistorySection historyList={histories} />
      </CookieInfoArea>
      {myCookie && (
        <MyButtonWrapper>
          <MainButton
            value={isActive ? '쿠키 숨기기' : '쿠키 공개하기'}
            buttonStyle={{ background: theme.colors.basic.gray30 }}
            onClick={updateStatus}
          />
          <MainButton
            onClick={() => handleClickButton(DetailModalState.DELETE)}
            value="쿠키 삭제하기"
            buttonStyle={{
              background: 'none',
              border: `1px solid ${theme.colors.state.error}`,
              color: theme.colors.state.error,
            }}
          />
        </MyButtonWrapper>
      )}
      <Modal
        open={contractError === ContractError.NONE && !!DETAIL_MODAL_LABEL(price)[modalState]}
        label={DETAIL_MODAL_LABEL(price)[modalState]}
        onClickYes={MODAL_YES_FUNC[modalState]}
        onClickNo={() => setModalState(DetailModalState.NONE)}
        onlyYes={modalState === DetailModalState.BUY_RESULT}
      />
      {/* for contract error */}
      <Modal
        open={contractError !== ContractError.NONE}
        label={ERROR_MODAL_LABEL[contractError]}
        onClickYes={handleClickErrorModalYes}
        onClickNo={() => navigate('/')}
      />
    </>
  );
}

export default CookieDetails;
