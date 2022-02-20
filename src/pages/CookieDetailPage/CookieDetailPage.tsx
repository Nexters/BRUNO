import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Icon, { View24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import CookieInfo from '@src/components/CookieInfo';
import CategoryButton from '@src/components/shared/CategoryButton';
import { Category, CategoryColor } from '@src/recoil/category';
import { CookieInfoType, HistoryType } from './types';

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
`;

const ViewCountWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ViewCountText = styled.span`
  margin-left: 5px;
  color: ${(props) => props.theme.colors.basic.gray60};
`;

function CookieDetailPage() {
  const [category, setCategory] = useState<Category>({
    categoryId: 1,
    name: 'friends',
    color: CategoryColor.BLUE,
  });
  const [viewCount, setViewCount] = useState<number>(0);

  const [question, setQuestion] = useState<string>('');
  const [hammer, setHammer] = useState<number>(0);

  const [collector, setCollector] = useState<string>('');
  const [creator, setCreator] = useState<string>('');
  const [cookieInfo, setCookieInfo] = useState<CookieInfoType>();
  const [history, setHistory] = useState<HistoryType>();

  useEffect(() => {
    // to do: 쿠키 상세 정보 가져오기
    setViewCount(235);
    setQuestion('너는 누구냐?');
    setHammer(24);
    setCollector('강동구 호랑이');
    setCreator('상일동 치타');
    setCookieInfo({
      wallet: '0x12451801',
      token: '125414',
    });
    setHistory({
      update: {
        user: '강동구 호랑이',
        question: '내가 여자친구가 있을까',
        hammer: 32,
        time: '2022-10-32 20:00',
      },
      create: {
        user: '강동구 호랑이',
        question: '내가 여자친구가 있을까',
        hammer: 32,
        time: '2022-10-32 20:00',
      },
      purchase: {
        user: '강동구 호랑이',
        question: '내가 여자친구가 있을까',
        hammer: 32,
        time: '2022-10-32 20:00',
      },
    });
  }, []);

  if (!cookieInfo || !history) return null;
  return (
    <>
      <CategoryWrapper>
        <CategoryButton isSelected category={category} />
        <ViewCountWrapper>
          <Icon color={theme.colors.basic.gray60}>
            <View24 />
          </Icon>
          <ViewCountText>{viewCount}</ViewCountText>
        </ViewCountWrapper>
      </CategoryWrapper>

      <CookieInfo
        question={question}
        hammer={hammer}
        collector={collector}
        creator={creator}
        cookieInfo={cookieInfo}
        history={history}
      />
    </>
  );
}

export default CookieDetailPage;
