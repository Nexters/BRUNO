import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { useUserInfo } from '@src/queries/hooks';
import { TabType } from '@src/components/UserHomeTab';
import AskContent from '@src/components/AskContent';
import CookieGrid from '@src/components/CookieGrid/CookieGrid';

const Container = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 270px);
`;

interface Props {
  isMy?: boolean;
  userId: string;
}

function UserContent({ isMy = false, userId }: Props) {
  const [searchParams] = useSearchParams();
  const { collectedCookies, createdCookies, askItems, refetchAsk } = useUserInfo({ userId });

  const getTabCotent = useMemo(
    () => ({
      [TabType.COLLECT]: <CookieGrid cookies={collectedCookies?.cookies} />,
      [TabType.CREATE]: <CookieGrid cookies={createdCookies?.cookies} />,
      [TabType.REQUEST]: <AskContent isMy={isMy} askItems={askItems} refetch={refetchAsk} />,
    }),
    [collectedCookies, createdCookies, isMy],
  );

  const currentTab = searchParams.get('tab') as TabType;
  const TabContent = getTabCotent[currentTab];

  return <Container>{TabContent}</Container>;
}

export default UserContent;
