import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useQuery } from 'react-query';

import Icon, { View24 } from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import CookieDetails from '@src/components/CookieDetails';
import CategoryButton from '@src/components/shared/CategoryButton';
import { Category, CategoryColor } from '@src/recoil/category';
import { getCookieDetail } from '@src/queries/cookies';
import { CookieDetail } from '@src/queries/types';
import { useLogin } from '@src/hooks';

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

type CookieDetailParams = { cookieId: string };

function CookieDetailPage() {
  const { userId } = useLogin();
  const { cookieId } = useParams<CookieDetailParams>() as CookieDetailParams;

  const { data } = useQuery<CookieDetail, Error>(['cookie', 'detail'], () =>
    getCookieDetail({ userId, cookieId: +cookieId }),
  );

  // TODO : 서버 카테고리 주면 적용해야 함
  const [category, setCategory] = useState<Category>({
    categoryId: 1,
    name: 'friends',
    color: CategoryColor.BLUE,
  });

  // TODO : loading 페이지 추가...
  if (!data) return <div>loading...</div>;

  const { question, price, viewCount, histories, collectorName, creatorName } = data;

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
      <CookieDetails
        question={question}
        hammer={price}
        collector={collectorName}
        creator={creatorName}
        historyList={histories}
      />
    </>
  );
}

export default CookieDetailPage;
