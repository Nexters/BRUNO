import { ReactNode } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
`;

function PageLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}

export default PageLayout;
