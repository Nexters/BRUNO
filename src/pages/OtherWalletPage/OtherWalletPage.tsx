import LoginForm from '@src/components/LoginForm';
import PageLayout from '@src/components/shared/PageLayout';
import { LoginFormType } from '@src/components/LoginForm/type';

function OtherWalletPage() {
  return (
    <PageLayout padding="20px">
      <LoginForm type={LoginFormType.OTHER_WALLET} />
    </PageLayout>
  );
}

export default OtherWalletPage;
