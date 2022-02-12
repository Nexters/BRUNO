import { ReactNode } from 'react';
import styled from 'styled-components';
import { NAVIGATION_HEIGHT } from '@src/assets/styles';
import Header from '@src/components/Header';
import Navigation from '@src/components/Navigation';

interface PageLayoutProps {
  children: ReactNode;
  padding?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layoutStyle?: any;
  onlyContents?: boolean;
}

interface LayoutProps {
  layoutStyle?: string;
  padding?: string;
  onlyContents: boolean;
}
const Root = styled.div`
  width: 100%;
`;

const Layout = styled.div<LayoutProps>`
  width: 100%;
  height: calc(100vh - ${NAVIGATION_HEIGHT}px);
  overflow-y: scroll;
  padding: ${(props) => props.padding || ''};
  padding-bottom: ${(props) => !props.onlyContents && NAVIGATION_HEIGHT}px;
  background: ${(props) => props.theme.background.main};
  ${(props) => props.layoutStyle};
`;

function PageLayout({
  children,
  padding,
  layoutStyle,
  onlyContents = false,
}: PageLayoutProps) {
  return (
    <Root>
      {!onlyContents && <Header />}

      <Layout
        layoutStyle={layoutStyle}
        padding={padding}
        onlyContents={onlyContents}
      >
        {children}
      </Layout>

      {!onlyContents && <Navigation />}
    </Root>
  );
}

export default PageLayout;
