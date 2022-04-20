import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { MEDIA_SIZE } from '@src/assets/styles';
import TabItem from './TabItem';
import { TabType } from './types';

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  max-width: ${MEDIA_SIZE.mobile}px;
  margin-top: 192px; // 개선 필요
  padding: 0 20px;
  border-bottom: 2px solid ${(props) => props.theme.colors.basic.gray20};
`;

type Props = {
  count: {
    collected: number;
    created: number;
    ask: number;
  };
};

function UserHomeTab({ count }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();

  const TABS = [
    { type: TabType.COLLECT, name: '소유한 쿠키', count: count.collected },
    { type: TabType.CREATE, name: '제작한 쿠키', count: count.created },
    { type: TabType.REQUEST, name: '받은 요청', count: count.ask },
  ];

  const currentTab = searchParams.get('tab') as TabType;

  useEffect(() => {
    if (!Object.values(TabType).includes(currentTab)) {
      setSearchParams({ tab: 'collect' });
    }
  }, [currentTab]);

  const handleClickTab = (tab: TabType) => {
    if (tab === currentTab) return;
    setSearchParams({ tab });
  };

  return (
    <Wrapper>
      {TABS.map(({ type, name, count }) => (
        <TabItem
          key={type}
          name={name}
          count={count}
          isActive={currentTab === type}
          onClick={() => handleClickTab(type)}
        />
      ))}
    </Wrapper>
  );
}

export default UserHomeTab;
