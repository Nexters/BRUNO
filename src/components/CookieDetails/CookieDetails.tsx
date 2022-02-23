import { theme } from '@src/assets/styles';
import Icon, { Comment24, Hammer24 } from '@src/assets/Icon';
import { ProfileImage01, ProfileImage02 } from '@src/assets/images';
import { CookieDetail, CookieStatus } from '@src/queries/types';
import CookieHistorySection from '@src/components/CookieHistorySection';
import NFTCookie from '@src/components/shared/NFTCookie';
import MainButton from '../shared/MainButton';
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
    question,
    price,
    histories,
    collectorName,
    creatorName,
    nftTokenId,
    contractAddress,
    cookieStatus,
    myCookie,
  } = data;
  const buttonText = getButtonText(myCookie, cookieStatus);

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
        <MainButton value={buttonText} disabled={cookieStatus !== CookieStatus.ACTIVE} />
      </CookieArea>

      <CreatorArea>
        <ProfileWrapper>
          <Title>쿠키 소유자</Title>
          <UserInfoWrapper>
            <UserImage src={ProfileImage01} />
            <UserName>{collectorName}</UserName>
          </UserInfoWrapper>
        </ProfileWrapper>

        <ProfileWrapper>
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
    </>
  );
}

export default CookieDetails;
