import PageLayout from '@src/components/shared/PageLayout';
import UserHomeTab from '@src/components/UserHomeTab';
import { theme } from '@src/assets/styles';

interface Props {
  isMy?: boolean;
}

function OtherWalletLoginPage({ isMy }: Props) {
  return (
    <PageLayout backgroundColor={theme.colors.gray100}>
      <UserHomeTab />
      {isMy && <div>isMy</div>}
    </PageLayout>
  );
}

export default OtherWalletLoginPage;
