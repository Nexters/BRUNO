import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { categoryListSelector, Category } from '@src/recoil/category';
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
          key={item.categoryId}
          category={item}
          isSelected={currentCategory === item.categoryId}
          onClick={() => setCategory(item)}
          disabled={isEdit}
        />
      ))}
    </CategoryWrapper>
  );
}

export default CategorySection;
