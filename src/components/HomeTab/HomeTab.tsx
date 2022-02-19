import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import CategoryButton from '@src/components/shared/CategoryButton';
import { categoryListSelector } from '@src/recoil/category';
import { ALL_CATEGORY } from './const';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  padding: 16px 20px;
  overflow-x: scroll;
`;

export default function HomeTab() {
  const [_, setSearchParams] = useSearchParams();
  const [selectedCategory, setCategory] = useState<number>(0);
  const categoryList = useRecoilValue(categoryListSelector);

  useEffect(() => {
    if (selectedCategory === ALL_CATEGORY.categoryId) setSearchParams({});
    else if (selectedCategory) setSearchParams({ category: String(selectedCategory) });
  }, [selectedCategory]);

  return (
    <Wrapper>
      <CategoryButton
        key="all"
        category={ALL_CATEGORY}
        isSelected={selectedCategory === ALL_CATEGORY.categoryId}
        onClick={() => setCategory(ALL_CATEGORY.categoryId)}
      />
      {categoryList.map((item) => (
        <CategoryButton
          key={item.categoryId}
          category={item}
          isSelected={selectedCategory === item.categoryId}
          onClick={() => setCategory(item.categoryId)}
        />
      ))}
    </Wrapper>
  );
}
