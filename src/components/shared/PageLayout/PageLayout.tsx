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
}

interface LayoutProps {
  layoutStyle?: string;
  padding?: string;
}

const Root = styled.div`
  width: 100%;
`;

const Layout = styled.div<LayoutProps>`
  width: 100%;
  height: calc(100vh - ${NAVIGATION_HEIGHT}px);
  overflow-y: scroll;
  padding: ${(props) => props.padding || ''};
  padding-bottom: ${NAVIGATION_HEIGHT}px;
  background: ${(props) => props.theme.background.main};
  ${(props) => props.layoutStyle};
`;

function PageLayout({ children, padding, layoutStyle }: PageLayoutProps) {
  return (
    <Root>
      <Header />

      <Layout layoutStyle={layoutStyle} padding={padding}>
        {children}
      </Layout>

      <Navigation />
    </Root>
  );
}

export default PageLayout;
