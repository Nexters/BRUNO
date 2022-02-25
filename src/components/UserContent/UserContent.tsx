import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { useUserInfo } from '@src/queries/hooks';
import { TabType } from '@src/components/UserHomeTab';
import AskContent from '@src/components/AskContent';
import CookieGrid from '@src/components/CookieGrid/CookieGrid';

const Container = styled.div`
  height: calc(100vh - 372px);
  margin-top: 268px;
  overflow-y: scroll;
`;

interface Props {
  isMy?: boolean;
  userId: string;
}

function UserContent({ isMy = false, userId }: Props) {
  const [searchParams] = useSearchParams();
  const { collectedCookies, createdCookies } = useUserInfo({ userId });

  const getTabCotent = useMemo(
    () => ({
      [TabType.COLLECT]: <CookieGrid cookies={collectedCookies?.contents} />,
      [TabType.CREATE]: <CookieGrid cookies={createdCookies?.contents} />,
      [TabType.REQUEST]: <AskContent isMy={isMy} userId={userId} />,
    }),
    [collectedCookies, createdCookies, isMy],
  );

  const currentTab = searchParams.get('tab') as TabType;
  const TabContent = getTabCotent[currentTab];

  return <Container>{TabContent}</Container>;
}

export default UserContent;
