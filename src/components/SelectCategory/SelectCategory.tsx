import styled from 'styled-components';
import MainButton from '@src/components/shared/MainButton';
import CategoryButton from './CategoryButton';
import { REGIST_TEXT_MAP as TEXT } from './const';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 66px;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontSize.head02};
  font-weight: 700;
  white-space: pre-wrap;
  color: ${(props) => props.theme.colors.basic.gray90};
  margin-bottom: 8px;
`;
const Guide = styled.a`
  margin-bottom: 14px;
  color: ${(props) => props.theme.colors.basic.gray60};
`;

const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

interface Props {
  category: Array<{
    id: number;
    name: string;
    color: string;
  }>;
  selected: number[];
  handleClickCategory: (id: number) => void;
  handleClickNext: () => void;
}

function SelectCategory({ category, selected, handleClickCategory, handleClickNext }: Props) {
  return (
    <Root>
      <Title>{TEXT.title}</Title>
      <Guide>{TEXT.guide}</Guide>

      <CategoryList>
        {category.map((categoryObj) => {
          const { id } = categoryObj;
          const isActive = selected.some((categoryId) => categoryId === id);
          return (
            <CategoryButton
              key={id}
              info={categoryObj}
              isActive={isActive}
              handleClickButton={() => {
                handleClickCategory(id);
              }}
            />
          );
        })}
      </CategoryList>
      <BottomWrapper>
        <MainButton value={TEXT.button} onClick={handleClickNext} />
      </BottomWrapper>
    </Root>
  );
}

export default SelectCategory;
