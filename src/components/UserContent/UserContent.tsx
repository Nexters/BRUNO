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
  userId: string;
}

const getTabCotent = (userId: string, isMy: boolean) => ({
  [TabType.COLLECT]: <CollectedCookieGrid userId={userId} />,
  [TabType.CREATE]: <div>create</div>,
  [TabType.REQUEST]: <RequestContent isMy={isMy} />,
});

function UserContent({ isMy = false, userId }: Props) {
  const [searchParams] = useSearchParams();

  const currentTab = searchParams.get('tab') as TabType;
  const TabContent = getTabCotent(userId, isMy)[currentTab];

  return <Container>{TabContent}</Container>;
}

export default UserContent;
