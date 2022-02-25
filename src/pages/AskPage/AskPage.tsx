import { useState } from 'react';
import styled from 'styled-components';
import { useQuery, useMutation } from 'react-query';

import MainButton from '@src/components/shared/MainButton';
import Input from '@src/components/shared/Input';
import { useNavigate, useParams } from 'react-router-dom';
import { UserProfileType } from '@src/queries/types';
import { getUser } from '@src/queries/users';
import { postAsk, PostAskArgs } from '@src/queries/ask';
import { useLogin } from '@src/hooks';

const Wrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  color: ${(props) => props.theme.colors.basic.gray90};
`;

const UserName = styled.div`
  font-size: 24px;
  font-weight: 700;
`;

const Section = styled.div`
  margin-top: 16px;
`;

const From = styled.div`
  margin-top: 16px;
  text-align: right;
  color: ${(props) => props.theme.colors.basic.gray50};
`;

const Title = styled.div`
  margin-bottom: 6px;
  font-weight: 700;
  font-size: 13px;
`;

const ButtonWrapper = styled.div`
  margin-top: auto;
`;

type AskPageParam = { userId: string };

function AskPage() {
  const navigate = useNavigate();
  const { userId: senderId } = useLogin();
  const { userId } = useParams<AskPageParam>() as AskPageParam;
  const { data: userProfile } = useQuery<UserProfileType>(['users', 'profile', userId], () => getUser(userId || ''));
  const [askData, setAskData] = useState({
    title: '',
    category: '', // TODO : 안쓸 것 같으면 나중에 제거 (스펙 확인중)
  });

  if (!userId) navigate('/');

  const mutation = useMutation((data: PostAskArgs) => postAsk(data));
  const handleChangeQuestion = (value: string) => {
    setAskData({ ...askData, title: value });
  };

  const handleClickCreate = async () => {
    if (!askData.title.trim() || !userId || !senderId) return false;
    await mutation.mutate(
      { title: askData.title, receiverId: userId, senderId },
      { onSuccess: () => navigate(`/users/${userId}?tab=request`) },
    );
  };

  return (
    <Wrapper>
      <UserName>@{userProfile?.nickname || '사용자'}</UserName>
      <Section>
        <Title>질문</Title>
        <Input value={askData.title} onChange={handleChangeQuestion} placeholder="궁금한 내용을 입력해주세요." />
        <From>From. 익명</From>
      </Section>
      <ButtonWrapper>
        <MainButton value="질문 요청하기" buttonStyle={{ margin: 0 }} onClick={handleClickCreate} />
      </ButtonWrapper>
    </Wrapper>
  );
}

export default AskPage;
