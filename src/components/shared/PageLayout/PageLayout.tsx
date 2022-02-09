import { ReactNode } from 'react';
import styled from 'styled-components';

interface PageLayoutProps {
  children: ReactNode;
  padding?: string;
  layoutStyle?: any;
}

interface LayoutProps {
  layoutStyle?: string;
  padding?: string;
}

const Layout = styled.div<LayoutProps>`
  position: relative;
  width: 100%;
  padding: ${(props) => props.padding || ''};
  background: ${(props) => props.theme.background.main};
  ${(props) => props.layoutStyle};
`;

function PageLayout({ children, padding, layoutStyle }: PageLayoutProps) {
  return (
    <Layout layoutStyle={layoutStyle} padding={padding}>
      {children}
    </Layout>
  );
}

export default PageLayout;
