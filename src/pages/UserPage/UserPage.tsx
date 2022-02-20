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
  const { userId } = useLogin();
  const { userProfile } = useUserInfo({ userId: isMy ? String(userId) : id });
  return (
    <PageLayout>
      <UserProfile isMy={isMy} profile={userProfile} />
      <UserHomeTab />
      <UserContent isMy={isMy} />
    </PageLayout>
  );
}

export default UserPage;
