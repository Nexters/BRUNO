import { useNavigate, useParams } from 'react-router-dom';

import { useLogin } from '@src/hooks';
import { useUserInfo } from '@src/queries/hooks';
import PageLayout from '@src/components/shared/PageLayout';
import UserHomeTab from '@src/components/UserHomeTab';
import UserProfile from '@src/components/UserProfile';
import UserContent from '@src/components/UserContent';
import { useEffect } from 'react';

interface Props {
  isMy?: boolean;
}

type UserPageParams = { userId: string };

function UserPage({ isMy = false }: Props) {
  const navigate = useNavigate();
  const { userId: id } = useParams<UserPageParams>() as UserPageParams;
  const { userId: myId } = useLogin();
  const userId = isMy ? String(myId) : id;
  const { userProfile, count } = useUserInfo({ userId });

  useEffect(() => {
    if (id === String(myId)) navigate('/users/my');
    else if (!isMy && !Number(id)) navigate(`/users/${id}`);
  }, [id, myId]);

  return (
    <PageLayout>
      {userProfile && <UserProfile isMy={isMy} profile={userProfile} />}
      <UserHomeTab count={count} />
      <UserContent isMy={isMy} userId={userId} />
    </PageLayout>
  );
}

export default UserPage;
