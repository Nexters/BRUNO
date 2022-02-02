import PageLayout from '@src/components/shared/PageLayout';
import UserHomeTab from '@src/components/UserHomeTab';
import UserProfile from '@src/components/UserProfile';
import UserContent from '@src/components/UserContent';

interface Props {
  isMy?: boolean;
}

function UserPage({ isMy = false }: Props) {
  return (
    <PageLayout>
      <UserProfile isMy={isMy} />
      <UserHomeTab />
      <UserContent isMy={isMy} />
    </PageLayout>
  );
}

export default UserPage;
