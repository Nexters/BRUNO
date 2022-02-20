import { theme } from '@src/assets/styles';
import Icon, { Comment24, Hammer24 } from '@src/assets/Icon';
import { ProfileImage01, ProfileImage02 } from '@src/assets/images';
import { CookieHistory } from '@src/queries/types';
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
  question: string;
  hammer: number;
  collector: string;
  creator: string;
  historyList: CookieHistory[];
};

function CookieDetails({ question, hammer, collector, creator, historyList }: Props) {
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
          <span>{234}</span>
        </CookieInfoWrapper>
        <CookieInfoWrapper>
          <span>토큰 주소</span>
          <span>{123}</span>
        </CookieInfoWrapper>

        <Title style={{ marginTop: '20px' }}>쿠키 히스토리</Title>
        <CookieHistorySection historyList={historyList} />
      </CookieInfoArea>
    </>
  );
}

export default CookieDetails;
