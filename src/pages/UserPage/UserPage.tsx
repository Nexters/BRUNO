import { useParams } from 'react-router-dom';

import { useLogin } from '@src/hooks';
import { useUserInfo } from '@src/queries/hooks';
import PageLayout from '@src/components/shared/PageLayout';
import UserHomeTab from '@src/components/UserHomeTab';
import UserProfile from '@src/components/UserProfile';
import UserContent from '@src/components/UserContent';

interface Props {
  isMy?: boolean;
}

type UserPageParams = { id: string };

function UserPage({ isMy = false }: Props) {
  const { id } = useParams<UserPageParams>() as UserPageParams;
  const { userId: myId } = useLogin();
  const userId = isMy ? String(myId) : id;
  const { userProfile, count } = useUserInfo({ userId });

  if (!userProfile) return null;

  return (
    <PageLayout>
      <UserProfile isMy={isMy} profile={userProfile} />
      <UserHomeTab count={count} />
      <UserContent isMy={isMy} userId={userId} />
    </PageLayout>
  );
}

export default UserPage;
