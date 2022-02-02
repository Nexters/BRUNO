import PageLayout from '@src/components/shared/PageLayout';
import UserHomeTab from '@src/components/UserHomeTab';
import UserProfile from '@src/components/UserProfile';
import UserContent from '@src/components/UserContent';
import { theme } from '@src/assets/styles';

interface Props {
  isMy?: boolean;
}

function UserPage({ isMy = false }: Props) {
  return (
    <PageLayout backgroundColor={theme.colors.gray100}>
      <UserProfile isMy={isMy} />
      <UserHomeTab />
      <UserContent isMy={isMy} />
    </PageLayout>
  );
}

export default UserPage;
