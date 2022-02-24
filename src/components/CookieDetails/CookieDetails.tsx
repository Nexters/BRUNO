import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { theme } from '@src/assets/styles';
import Icon, { Comment24, Hammer24 } from '@src/assets/Icon';
import { ProfileImage01, ProfileImage02 } from '@src/assets/images';
import { CookieDetail, CookieStatus } from '@src/queries/types';
import CookieHistorySection from '@src/components/CookieHistorySection';
import NFTCookie from '@src/components/shared/NFTCookie';
import MainButton from '@src/components/shared/MainButton';
import Modal from '@src/components/shared/Modal';
import { deleteCookie as _deleteCookie, updateCookieStatus, UpdateCookieStatusArgs } from '@src/queries/cookies';

import { DetailModalState, DETAIL_MODAL_LABEL } from './const';
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
};

const getButtonText = (myCookie: boolean, status: CookieStatus) => {
  if (status === CookieStatus.HIDDEN) return '이 쿠키는 숨겨졌어요.';
  return myCookie ? '가격 정보 수정하기' : '쿠키 구매하기';
};

function CookieDetails({ data }: Props) {
  const {
    cookieId,
    question,
    price,
    histories,
    collectorId,
    collectorName,
    creatorId,
    creatorName,
    nftTokenId,
    contractAddress,
    cookieStatus,
    myCookie,
  } = data;
  const navigate = useNavigate();
  const deleteMutation = useMutation((cookieId: number | string) => _deleteCookie(cookieId));
  const updateStatusMutation = useMutation((data: UpdateCookieStatusArgs) => updateCookieStatus(data));
  const [modalState, setModalState] = useState<DetailModalState>(DetailModalState.NONE);

  const isActive = cookieStatus === CookieStatus.ACTIVE;
  const isAvailableBuy = !myCookie && isActive;
  const buttonText = getButtonText(myCookie, cookieStatus);
  const handleClickButton = (nextState: DetailModalState) => setModalState(nextState);

  const deleteCookie = async () => {
    await deleteMutation.mutate(cookieId, {
      onSuccess: () => navigate('/'),
    });
  };

  const updateStatus = async () => {
    await updateStatusMutation.mutate(
      { cookieId, status: isActive ? CookieStatus.HIDDEN : CookieStatus.ACTIVE },
      {
        onSuccess: () => setModalState(DetailModalState.NONE),
      },
    );
  };

  return (
    <>
      <CookieArea>
        <QuestionWrapper>
          <div>Q. {question}</div>
        </QuestionWrapper>

        <AnswerWrapper>
          <Icon color={theme.colors.basic.gray60} style={{ marginBottom: 'auto' }}>
            <Comment24 />
          </Icon>
          <NFTCookie cookieId={1} categoryId={1} />
        </AnswerWrapper>

        <HammerWrapper>
          <Hammer>망치</Hammer>
          <HammerCount>
            <Icon color={theme.colors.basic.gray60}>
              <Hammer24 />
            </Icon>
            {price}
            <HammerUnit>톤</HammerUnit>
          </HammerCount>
        </HammerWrapper>
        <MainButton
          value={buttonText}
          disabled={cookieStatus !== CookieStatus.ACTIVE}
          onClick={() => {
            if (isAvailableBuy) handleClickButton(DetailModalState.BUY);
          }}
        />
      </CookieArea>

      <CreatorArea>
        <ProfileWrapper onClick={() => navigate(`/users/${collectorId}`)}>
          <Title>쿠키 소유자</Title>
          <UserInfoWrapper>
            <UserImage src={ProfileImage01} />
            <UserName>{collectorName}</UserName>
          </UserInfoWrapper>
        </ProfileWrapper>

        <ProfileWrapper onClick={() => navigate(`/users/${creatorId}`)}>
          <Title>쿠키 제작자</Title>
          <UserInfoWrapper>
            <UserImage src={ProfileImage02} />
            <UserName>{creatorName}</UserName>
          </UserInfoWrapper>
        </ProfileWrapper>
      </CreatorArea>

      <CookieInfoArea>
        <Title>쿠키 정보</Title>
        <CookieInfoWrapper>
          <span>계약 주소</span>
          <span>{contractAddress}</span>
        </CookieInfoWrapper>
        <CookieInfoWrapper>
          <span>토큰 주소</span>
          <span>{nftTokenId}</span>
        </CookieInfoWrapper>

        <Title style={{ marginTop: '20px' }}>쿠키 히스토리</Title>
        <CookieHistorySection historyList={histories} />
      </CookieInfoArea>
      {/* TODO : 쿠키 삭제 숨기기 */}
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
        open={modalState !== DetailModalState.NONE}
        label={DETAIL_MODAL_LABEL(price)[modalState]}
        onClickYes={modalState === DetailModalState.DELETE ? deleteCookie : undefined}
      />
    </>
  );
}

export default CookieDetails;
