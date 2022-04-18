import { ReactNode, useMemo } from 'react';
import styled from 'styled-components';
import { NAVIGATION_HEIGHT, MEDIA_SIZE } from '@src/assets/styles';
import Header from '@src/components/Header';
import Navigation from '@src/components/Navigation';
import { HeaderPage } from '@src/components/Header/const';
import { useQRcodeModal } from '@src/components/shared/QRcodeModal';

interface PageLayoutProps {
  children: ReactNode;
  padding?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layoutStyle?: any;
  onlyContents?: boolean;
  pageType?: HeaderPage;
}

interface LayoutProps {
  layoutStyle?: string;
  padding?: string;
  onlyContents: boolean;
}

const Root = styled.div`
  width: 100%;
  max-width: ${MEDIA_SIZE.mobile}px;
  height: 100vh;
`;

const Layout = styled.div<LayoutProps>`
  width: 100%;
  max-width: ${MEDIA_SIZE.mobile}px;
  height: calc(100vh - ${NAVIGATION_HEIGHT}px);
  overflow-y: scroll;
  padding: ${(props) => props.padding || ''};
  padding-bottom: ${(props) => !props.onlyContents && NAVIGATION_HEIGHT}px;
  background: ${(props) => props.theme.colors.background.gradientBlack};
  ${(props) => props.layoutStyle};
`;

function PageLayout({
  children,
  padding,
  layoutStyle,
  onlyContents = false,
  pageType = HeaderPage.MAIN,
}: PageLayoutProps) {
  const { isOpen } = useQRcodeModal();
  const showHeader = useMemo(() => {
    if (pageType === HeaderPage.JOIN || pageType === HeaderPage.TUTORIAL) return true;
    return !onlyContents;
  }, []);

  return (
    <Root>
      {showHeader && <Header pageType={pageType} />}
      <Layout layoutStyle={layoutStyle} padding={padding} onlyContents={onlyContents}>
        {children}
      </Layout>
      {!onlyContents && !isOpen && <Navigation />}
    </Root>
  );
}

export default PageLayout;
