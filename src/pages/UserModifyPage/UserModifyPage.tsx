import { useState, useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { useLogin } from '@src/hooks';
import { useUserInfo } from '@src/queries/hooks';
import { userInfoAtom } from '@src/recoil/user';
import UserProfile from '@src/components/UserProfile';
import TextArea from '@src/components/shared/TextArea';
import MainButton from '@src/components/shared/MainButton';

const Wrapper = styled.div`
  margin-top: 135px;
  padding: 0px 20px;
  height: calc(100vh - 270px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Nickname = styled.div`
  margin-bottom: 27px;
  font-size: ${(props) => props.theme.fontSize.large};
  font-weight: 700;
  color: ${(props) => props.theme.colors.basic.gray90};
`;

function UserModifyPage() {
  const { userId } = useLogin();
  const { userProfile } = useUserInfo({ userId: String(userId) });

  const userInfo = useRecoilState(userInfoAtom);
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const [introduction, setIntroduction] = useState(userProfile?.introduction);

  const handleChangeIntroduction = (value: string) => {
    setIntroduction(value);
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, introduction: value }));
  };

  useEffect(() => {
    if (!userProfile) return;
    setUserInfo(() => userProfile);
  }, []);

  return (
    userProfile && (
      <>
        <UserProfile profile={userProfile} isMy isModify />
        <Wrapper>
          <div>
            <Nickname>{userProfile?.nickname}</Nickname>
            <TextArea
              value={introduction || ''}
              onChange={(value) => handleChangeIntroduction(value)}
              label="소개"
              placeholder="소개글을 입력해주세요."
              limit={25}
            />
          </div>
          <MainButton value="수정하기" onClick={() => console.log('api호출')} />
        </Wrapper>
      </>
    )
  );
}

export default UserModifyPage;
