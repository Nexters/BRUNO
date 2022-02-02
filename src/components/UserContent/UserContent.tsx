// import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import styled from 'styled-components';

import { TabType } from '@src/components/UserHomeTab';
import RequestContent from '@src/components/RequestContent';

interface Props {
  isMy?: boolean;
}

const getTabCotent = (isMy: boolean) => ({
  [TabType.COLLECT]: <RequestContent isMy={isMy} />,
  [TabType.CREATE]: <RequestContent isMy={isMy} />,
  [TabType.REQUEST]: <RequestContent isMy={isMy} />,
});

function UserContent({ isMy = false }: Props) {
  const [searchParams] = useSearchParams();

  const currentTab = searchParams.get('tab') as TabType;
  const TabContent = getTabCotent(isMy)[currentTab];

  return <div>{TabContent}</div>;
}

export default UserContent;
