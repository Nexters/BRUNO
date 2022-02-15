import MainHeader from './MainHeader';
import SubHeader from './SubHeader';
import { HeaderPage } from './const';

interface Props {
  pageType: HeaderPage;
}

function Header({ pageType }: Props) {
  if (pageType === HeaderPage.MAIN) return <MainHeader />;
  return <SubHeader pageType={pageType} />;
}

export default Header;
