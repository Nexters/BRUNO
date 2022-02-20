import { theme } from '@src/assets/styles';
import Icon, { Comment24, Hammer24 } from '@src/assets/Icon';
import { ProfileImage01, ProfileImage02 } from '@src/assets/images';
import { CookieDetail } from '@src/queries/types';
import CookieHistorySection from '@src/components/CookieHistorySection';
import MainButton from '../shared/MainButton';
import {
  AnswerWrapper,
  CookieArea,
  CookieImage,
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

function CookieDetails({ data }: Props) {
  const { question, price, histories, collectorName, creatorName, nftTokenId, contractAddress } = data;

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
          <CookieImage />
        </AnswerWrapper>

        <HammerWrapper>
          <Hammer>망치</Hammer>
          <HammerCount>
            <Icon color={theme.colors.basic.gray60}>
              <Hammer24 />
            </Icon>
            {price}
            <HammerUnit>개</HammerUnit>
          </HammerCount>
        </HammerWrapper>
        <MainButton value="구매하기" />
      </CookieArea>

      <CreatorArea>
        <ProfileWrapper>
          <Title>소유자</Title>
          <UserInfoWrapper>
            <UserImage src={ProfileImage01} />
            <UserName>{collectorName}</UserName>
          </UserInfoWrapper>
        </ProfileWrapper>

        <ProfileWrapper>
          <Title>생성자</Title>
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
