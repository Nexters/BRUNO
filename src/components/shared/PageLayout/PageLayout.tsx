import { ReactNode } from 'react';
import styled from 'styled-components';

interface PageLayoutProps {
  children: ReactNode;
  padding?: string;
}

interface LayoutProps {
  padding?: string;
}

const Layout = styled.div<LayoutProps>`
  width: 100%;
  padding: ${(props) => props.padding || ''};
`;

function PageLayout({ children, padding }: PageLayoutProps) {
  return <Layout padding={padding}>{children}</Layout>;
}

export default PageLayout;
