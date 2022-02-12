import { theme } from '@src/assets/styles';
import Icon, { Comment24, Hammer24 } from '@src/assets/Icon';
import { ProfileImage01, ProfileImage02 } from '@src/assets/images';
import { CookieInfoType, HistoryType } from '@src/pages/CookieDetailPage';
import MainButton from '../shared/MainButton';
import {
  AnswerWrapper,
  CardWrapper,
  CookieArea,
  CookieImage,
  CookieInfoArea,
  CookieInfoWrapper,
  CreatorArea,
  Hammer,
  HammerCount,
  HammerUnit,
  HammerWrapper,
  HistoryCard,
  ProfileWrapper,
  QuestionWrapper,
  Time,
  Title,
  UserImage,
  UserInfoWrapper,
  UserName,
} from './styled';

type Props = {
  question: string;
  hammer: number;
  collector: string;
  creator: string;
  cookieInfo: CookieInfoType;
  history: HistoryType;
};

function CookieInfo({
  question,
  hammer,
  collector,
  creator,
  cookieInfo,
  history,
}: Props) {
  return (
    <>
      <CookieArea>
        <QuestionWrapper>
          <div>Q. {question}</div>
        </QuestionWrapper>

        <AnswerWrapper>
          <Icon color={theme.colors.basic.gray60}>
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
            {hammer}
            <HammerUnit>개</HammerUnit>
          </HammerCount>
        </HammerWrapper>
        <MainButton value="구매하기" />
      </CookieArea>

      <CreatorArea>
        <ProfileWrapper>
          <Title>Collector</Title>

          <UserInfoWrapper>
            <UserImage src={ProfileImage01} />
            <UserName>{collector}</UserName>
          </UserInfoWrapper>
        </ProfileWrapper>

        <ProfileWrapper>
          <Title>Creator</Title>
          <UserInfoWrapper>
            <UserImage src={ProfileImage02} />
            <UserName>{creator}</UserName>
          </UserInfoWrapper>
        </ProfileWrapper>
      </CreatorArea>

      <CookieInfoArea>
        <Title>쿠키 정보</Title>

        <CookieInfoWrapper>
          <span>계약 주소</span>
          <span>{cookieInfo.wallet}</span>
        </CookieInfoWrapper>
        <CookieInfoWrapper>
          <span>토큰 주소</span>
          <span>{cookieInfo.token}</span>
        </CookieInfoWrapper>

        <Title style={{ marginTop: '20px' }}>쿠키 히스토리</Title>
        <CardWrapper>
          <HistoryCard>
            <Title>수정</Title>
            {`'${history.update.user}'님이 'Q.${history.update.question}'를 망치 ${history.update.hammer}개로 수정했습니다.`}
            <Time>{history.update.time}</Time>
          </HistoryCard>

          <HistoryCard>
            <Title>구매</Title>
            {`'${history.update.user}'님이 'Q.${history.update.question}'를 망치 ${history.update.hammer}개로 구매했습니다.`}
            <Time>{history.update.time}</Time>
          </HistoryCard>

          <HistoryCard>
            <Title>생성</Title>
            {`'${history.update.user}'님이 'Q.${history.update.question}'를 망치 ${history.update.hammer}개로 생성했습니다.`}
            <Time>{history.update.time}</Time>
          </HistoryCard>
        </CardWrapper>
      </CookieInfoArea>
    </>
  );
}

export default CookieInfo;
