import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import styled from 'styled-components';
import { useLogin } from '@src/hooks';
import { useUserInfo } from '@src/queries/hooks';
import { modifyUserInfo } from '@src/queries/users';
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

const INTRODUCTION_MAX_LENGTH = 25;

function UserModifyPage() {
  const navigate = useNavigate();
  const { userId } = useLogin();
  const { userProfile } = useUserInfo({ userId: String(userId) });

  const userInfo = useRecoilState(userInfoAtom);
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const [introduction, setIntroduction] = useState(userProfile?.introduction);
  const [editDisabled, setEditDisabled] = useState(true);
  const initialUserInfo = useRef(userInfo);

  const handleChangeIntroduction = (value: string) => {
    setIntroduction(value);
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, introduction: value }));
  };

  const onClickModify = async () => {
    const formData = new FormData();
    formData.append('introduction', introduction || '');
    if (userInfo[0].profileUrl !== initialUserInfo.current[0].profileUrl) {
      formData.append('profilePicture', userInfo[0].profileUrl);
    }
    if (userInfo[0].backgroundUrl !== initialUserInfo.current[0].backgroundUrl) {
      formData.append('backgroundPicture', userInfo[0].backgroundUrl);
    }

    const res = await modifyUserInfo(userId, formData);
    if (res) navigate(`/users/${userId}`);
  };

  useEffect(() => {
    if (introduction && introduction?.length > INTRODUCTION_MAX_LENGTH) {
      setEditDisabled(true);
    } else {
      setEditDisabled(false);
    }
  }, [introduction]);

  useEffect(() => {
    if (!userProfile) return;
    setUserInfo(() => userProfile);
  }, []);

  return (
    userProfile && (
      <>
        <UserProfile profile={userProfile} isMy isEdit />
        <Wrapper>
          <div>
            <Nickname>{userProfile?.nickname}</Nickname>
            <TextArea
              value={introduction || ''}
              onChange={(value) => handleChangeIntroduction(value)}
              label="??????"
              placeholder="???????????? ??????????????????."
              limit={INTRODUCTION_MAX_LENGTH}
            />
          </div>
          <MainButton value="????????????" onClick={onClickModify} disabled={editDisabled} />
        </Wrapper>
      </>
    )
  );
}

export default UserModifyPage;
