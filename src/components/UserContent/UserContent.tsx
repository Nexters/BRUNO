// import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { TabType } from '@src/components/UserHomeTab';
import RequestContent from '@src/components/RequestContent';

const Container = styled.div`
  padding-top: 20px;
`;

interface Props {
  isMy?: boolean;
}

const getTabCotent = (isMy: boolean) => ({
  [TabType.COLLECT]: <div>collect</div>,
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
