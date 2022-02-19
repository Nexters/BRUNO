import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import CategoryButton from '@src/components/shared/CategoryButton';
import { categoryListSelector } from '@src/recoil/category';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  padding: 16px 20px;
  overflow-x: scroll;
`;

export default function HomeTab() {
  const categoryList = useRecoilValue(categoryListSelector);
  return (
    <Wrapper>
      {categoryList.map((category, index) => (
        <CategoryButton
          key={category.categoryId}
          category={category}
          isSelected={index === 0} // TODO : selected 로직 추가
        />
      ))}
    </Wrapper>
  );
}
