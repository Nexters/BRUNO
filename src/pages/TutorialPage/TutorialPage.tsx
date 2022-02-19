import { HeaderPage } from '@src/components/Header/const';
import PageLayout from '@src/components/shared/PageLayout';

function TutorialPage() {
  return (
    <PageLayout padding="20px" pageType={HeaderPage.TUTORIAL} onlyContents>
      Tutorial
    </PageLayout>
  );
}

export default TutorialPage;
