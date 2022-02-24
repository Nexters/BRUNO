import { useState } from 'react';
import styled from 'styled-components';
import MainButton from '@src/components/shared/MainButton';
import { useRecoilValue } from 'recoil';
import { categoryListSelector } from '@src/recoil/category';
import { useNavigate } from 'react-router-dom';
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

type CategoryType = {
  id: number;
  name: string;
  color: string;
};

function SelectCategory() {
  const category: CategoryType[] = useRecoilValue(categoryListSelector);
  const [selectedCategory, setSelectedCategory] = useState<number[]>([]);
  const navigate = useNavigate();

  const regist = () => {
    // to do : 회원 regist api 연동
    // const { data: userProfile } = useQuery<UserProfileType>(['walletAddress', 'nickname', 'introduction', 'profileUrl', 'backgroundUrl'], () => postUser(), {
    //   onSuccess: (data) => {
    //     const { request_key: requestKey, expiration_time: expirationTime } =
    //       data.data;
    //     // setKlip({ requestKey, expirationTime });
    //   },);
    // navigate('/tutorial');
  };

  const handleSubmit = () => {
    if (selectedCategory.length <= 3) return;
    regist();

    // POST /user
    // try {

    //   setStep(1);
    // } catch (error) {

    // }
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
        <MainButton value={TEXT.button} onClick={handleSubmit} />
      </BottomWrapper>
    </Root>
  );
}

export default SelectCategory;
