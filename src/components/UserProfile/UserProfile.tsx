import { UserProfileType } from '@src/queries/types';
import UserPhoto from './UserPhoto';
import BioSection from './BioSection';

interface Props {
  isMy: boolean;
  profile: UserProfileType;
}

function UserProfile({ isMy, profile }: Props) {
  const { nickname, introduction, profileUrl } = profile;

  return (
    <div>
      <UserPhoto isMy={isMy} imageUrl={profileUrl} />
      <BioSection nickname={nickname} introduction={introduction} />
    </div>
  );
}

export default UserProfile;
