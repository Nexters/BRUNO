import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { categoryListSelector } from '@src/recoil/category';
import { Category } from '@src/queries/types';
import CategoryButton from '@src/components/shared/CategoryButton';

type Props = {
  isEdit?: boolean;
  setCategory: (item: Category) => void;
  currentCategory: number;
};

const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

function CategorySection({ isEdit = false, currentCategory, setCategory }: Props) {
  const categoryList = useRecoilValue(categoryListSelector);

  return (
    <CategoryWrapper>
      {categoryList.map((item) => (
        <CategoryButton
          key={item.id}
          category={item}
          isSelected={currentCategory === item.id}
          onClick={() => setCategory(item)}
          disabled={isEdit}
        />
      ))}
    </CategoryWrapper>
  );
}

export default CategorySection;
