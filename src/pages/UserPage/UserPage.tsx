import PageLayout from '@src/components/shared/PageLayout';
import UserHomeTab from '@src/components/UserHomeTab';
import UserProfile from '@src/components/UserProfile';
import { theme } from '@src/assets/styles';

interface Props {
  isMy?: boolean;
}

function UserPage({ isMy = false }: Props) {
  return (
    <PageLayout backgroundColor={theme.colors.gray100}>
      <UserProfile isMy={isMy} />
      <UserHomeTab />
    </PageLayout>
  );
}

export default UserPage;
