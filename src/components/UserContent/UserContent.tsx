// import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { TabType } from '@src/components/UserHomeTab';
import RequestContent from '@src/components/RequestContent';
import CollectedCookieGrid from '@src/components/CollectedCookieGrid/CollectedCookieGrid';

const Container = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 270px);
`;

interface Props {
  isMy?: boolean;
}

const getTabCotent = (isMy: boolean) => ({
  [TabType.COLLECT]: <CollectedCookieGrid />,
  [TabType.CREATE]: <div>create</div>,
  [TabType.REQUEST]: <RequestContent isMy={isMy} />,
});

function UserContent({ isMy = false }: Props) {
  const [searchParams] = useSearchParams();

  const currentTab = searchParams.get('tab') as TabType;
  const TabContent = getTabCotent(isMy)[currentTab];

  return <Container>{TabContent}</Container>;
}

export default UserContent;
