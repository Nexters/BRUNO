import UserPhoto from './UserPhoto';
import BioSection from './BioSection';

interface Props {
  isMy: boolean;
}

function UserProfile({ isMy }: Props) {
  return (
    <div>
      <UserPhoto isMy={isMy} />
      <BioSection />
    </div>
  );
}

export default UserProfile;
