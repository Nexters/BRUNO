import styled from 'styled-components';
import CategoryButton from '@src/components/shared/CategoryButton';
import { CATEGORIES, COLORS } from './const';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  padding: 16px 20px;
  overflow-x: scroll;
`;

export default function HomeTab() {
  return (
    <Wrapper>
      {CATEGORIES.map((category, index) => (
        <CategoryButton
          // eslint-disable-next-line react/no-array-index-key
          key={`CATEGORY_${index}`}
          category={category}
          color={COLORS[(index + 1) % COLORS.length]}
          isSelected={index === 0} // TODO : selected 로직 추가
        />
      ))}
    </Wrapper>
  );
}
