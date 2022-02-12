import PageLayout from '@src/components/shared/PageLayout';
import UserHomeTab from '@src/components/UserHomeTab';
import UserProfile from '@src/components/UserProfile';
import UserContent from '@src/components/UserContent';
import Modal from '@src/components/shared/Modal';

interface Props {
  isMy?: boolean;
}

const label = {
  title: '해당 쿠키를 구매하시겠어요?',
  description:
    '이 쿠키를 24톤에 구매해\n쿠키의 내용을 까보시겠어요?쿠키의 내용을 까보시겠어요?쿠키의 내용을 까보시겠어요?쿠키의 내용을 까보시겠어요?쿠키의 내용을 까보시겠어요?',
  yes: '구매하기',
};

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
