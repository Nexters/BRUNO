import React, { useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from '@src/recoil/user';
import styled from 'styled-components';
import Icon from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import { ProfileImage01, ProfileImage02 } from '@src/assets/images';
import { Button } from '@src/components/shared/MainButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 20px;
`;

const PhotoWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  z-index: 5;
`;

const Photo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100%;
`;

const ActionButton = styled.button`
  position: absolute;
  right: 0px;
  bottom: -4px;
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.basic.gray80};
  background-color: ${(props) => props.theme.colors.basic.gray10};
`;

const RequestButton = styled(Button)`
  width: 100%;
  height: 40px;
  margin: 0 0 5px 58px;
  line-height: 120%;
  background: ${(props) => props.theme.colors.brand.main};
  z-index: 3;
`;

const MAX_ALLOWED_SIZE = 10 * 1024 * 1024; // 10MB
interface Props {
  isMy: boolean;
  isEdit?: boolean;
  imageUrl: string;
}

function UserPhoto({ isMy, isEdit = false, imageUrl }: Props) {
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const navigate = useNavigate();
  const { userId } = useParams();

  const setModifyMode = () => {
    navigate('/users/edit');
  };

  const defaultMyProfileStatus = isMy && !isEdit;
  const defaultImageUrl = defaultMyProfileStatus ? ProfileImage01 : ProfileImage02;
  const [profile, setProfile] = useState(imageUrl || defaultImageUrl);

  const inputFile = useRef<HTMLInputElement>(null);
  const onClickModifyButton = () => {
    inputFile?.current?.click();
  };

  const onChangeFile = (e: any) => {
    const file = e.target.files[0];

    if (file.size > MAX_ALLOWED_SIZE) return;

    const url = URL.createObjectURL(file);
    setProfile(url);
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, profileUrl: url }));
  };

  const handleClickAskButton = () => navigate(`/ask/${userId}`);

  // eslint-disable-next-line no-return-assign
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = ProfileImage01);

  return (
    <Wrapper>
      <PhotoWrapper>
        <Photo src={profile} onError={handleImageError} />
        {defaultMyProfileStatus && (
          <ActionButton onClick={setModifyMode}>
            <Icon icon="plus18" size={18} color={theme.colors.basic.gray90} />
          </ActionButton>
        )}
        {isEdit && (
          <ActionButton onClick={onClickModifyButton}>
            <Icon icon="edit18" size={14} color={theme.colors.basic.gray90} noFill />
            <input
              type="file"
              accept=".jpg,.png"
              id="file"
              ref={inputFile}
              style={{ display: 'none' }}
              onChange={onChangeFile}
            />
          </ActionButton>
        )}
      </PhotoWrapper>
      {!isMy && <RequestButton onClick={handleClickAskButton}>질문 요청하기</RequestButton>}
    </Wrapper>
  );
}

export default UserPhoto;
