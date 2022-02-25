import { UserProfileType } from '@src/queries/types';
import styled from 'styled-components';
import { BackgroundImage01, BackgroundImage02 } from '@src/assets/images';
import UserPhoto from './UserPhoto';
import BioSection from './BioSection';

const Wrapper = styled.div`
  padding-top: 12px;
`;

const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 700px;
  height: 184px;
  object-fit: cover;
`;

const BackgroundImageShadow = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 700px;
  height: 185px;
  background: linear-gradient(180deg, rgba(1, 1, 16, 0.1) 0%, #010112 100%);
`;

interface Props {
  isMy: boolean;
  profile: UserProfileType;
}

function UserProfile({ isMy, profile }: Props) {
  const bgDefaultImage = Math.random() > 0.5 ? BackgroundImage01 : BackgroundImage02;
  const { nickname, introduction, profileUrl, backgroundUrl } = profile;

  return (
    <Wrapper>
      <BackgroundImage src={backgroundUrl || bgDefaultImage} />
      <BackgroundImageShadow />
      <UserPhoto isMy={isMy} imageUrl={profileUrl} />
      <BioSection nickname={nickname} introduction={introduction} />
    </Wrapper>
  );
}

export default UserProfile;
