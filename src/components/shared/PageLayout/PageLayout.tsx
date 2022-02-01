import { ReactNode } from 'react';
import styled from 'styled-components';

interface PageLayoutProps {
  children: ReactNode;
  padding?: string;
  backgroundColor?: string;
}

interface LayoutProps {
  padding?: string;
  backgroundColor?: string;
}

const Layout = styled.div<LayoutProps>`
  position: relative;
  width: 100%;
  padding: ${(props) => props.padding || ''};
  background-color: ${(props) => props.backgroundColor || ''}; ;
`;

function PageLayout({ children, padding, backgroundColor }: PageLayoutProps) {
  return (
    <Layout padding={padding} backgroundColor={backgroundColor}>
      {children}
    </Layout>
  );
}

export default PageLayout;
