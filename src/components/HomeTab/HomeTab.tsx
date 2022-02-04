import CategoryButton from '@src/components/shared/CategoryButton';
import styled from 'styled-components';
import { CATEGORIES, COLORS } from './const';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
  height: 22px;
  padding: 16px;
`;

export default function HomeTab() {
  return (
    <Wrapper>
      {CATEGORIES.map((category, index) => (
        <CategoryButton
          category={category}
          color={COLORS[index % COLORS.length]}
        />
      ))}
    </Wrapper>
  );
}
