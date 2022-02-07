import CategoryButton from '@src/components/shared/CategoryButton';
import styled from 'styled-components';
import { CATEGORIES, COLORS } from '../shared/const';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  padding: 8px 16px;
  margin-bottom: 8px;
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
          color={COLORS[index % COLORS.length]}
        />
      ))}
    </Wrapper>
  );
}
