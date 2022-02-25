import { useState } from 'react';
import styled from 'styled-components';
import MainButton from '@src/components/shared/MainButton';
import { useRecoilValue } from 'recoil';
import { categoryListSelector } from '@src/recoil/category';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '@src/hooks';
import { useMutation } from 'react-query';
import { postUserCategory, PostUserCategoryArgs } from '@src/queries/categories';
import { REGIST_TEXT_MAP as TEXT } from './const';
import CategoryButton from './CategoryButton';

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

function SelectCategory() {
  const category = useRecoilValue(categoryListSelector);
  const [selectedCategory, setSelectedCategory] = useState<number[]>([]);
  const navigate = useNavigate();
  const { userId } = useLogin();
  const mutation = useMutation((obj: PostUserCategoryArgs) => postUserCategory(obj));

  const disabled = selectedCategory.length < 3;
  const handleSubmit = async () => {
    if (disabled) return;

    const data = {
      userId,
      categoryIdList: selectedCategory,
    };
    await mutation.mutate(data, { onSuccess: () => navigate('/tutorial') });
  };

  const handleClickCategory = (id: number) => {
    if (selectedCategory.some((categoryId) => categoryId === id)) {
      setSelectedCategory(selectedCategory.filter((categoryId) => categoryId !== id));
    } else {
      setSelectedCategory(selectedCategory.concat(id));
    }
  };

  return (
    <Root>
      <Title>{TEXT.title}</Title>
      <Guide>{TEXT.guide}</Guide>

      <CategoryList>
        {category.map((categoryObj) => {
          const { id } = categoryObj;
          const isActive = selectedCategory.some((categoryId) => categoryId === id);
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
        <MainButton value={TEXT.button} onClick={handleSubmit} disabled={disabled} />
      </BottomWrapper>
    </Root>
  );
}

export default SelectCategory;
