import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { userInfoAtom } from '@src/recoil/user';
import { UserProfileType } from '@src/queries/types';
import { BackgroundImage01, BackgroundImage02 } from '@src/assets/images';
import { MEDIA_SIZE, theme } from '@src/assets/styles';
import Icon from '@src/assets/Icon';
import UserPhoto from './UserPhoto';
import BioSection from './BioSection';

const Wrapper = styled.div`
  position: fixed;
  padding-top: 16px;
  width: 100%;
  max-width: ${MEDIA_SIZE.mobile}px;
`;

const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: ${MEDIA_SIZE.mobile}px;
  height: 184px;
  object-fit: cover;
  z-index: 1;
`;

const BackgroundImageShadow = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  max-width: ${MEDIA_SIZE.mobile}px;
  height: 185px;
  background: linear-gradient(180deg, rgba(1, 1, 16, 0.1) 0%, #010112 100%);
  z-index: 1;
`;

const ActionButton = styled.button`
  position: absolute;
  right: 20px;
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
  z-index: 5;
`;

interface Props {
  isMy: boolean;
  isModify?: boolean;
  profile: UserProfileType;
}

function UserProfile({ isMy = false, isModify = false, profile }: Props) {
  const setUserInfo = useSetRecoilState(userInfoAtom);

  const bgDefaultImage = Math.random() > 0.5 ? BackgroundImage01 : BackgroundImage02;
  const { nickname, introduction, profileUrl, backgroundUrl } = profile;

  const [backgroundImage, setBackgroundImage] = useState(backgroundUrl || bgDefaultImage);

  // eslint-disable-next-line no-return-assign
  const handleBgImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) =>
    (e.currentTarget.src = bgDefaultImage);

  const inputFile = useRef<HTMLInputElement>(null);
  const onClickModifyButton = () => {
    inputFile?.current?.click();
  };

  const onChangeFile = (e: any) => {
    const file = e.target.files[0];

    const maxAllowedSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxAllowedSize) return;

    const url = URL.createObjectURL(file);
    setBackgroundImage(url);
    setUserInfo((prevUserInfo) => ({ ...prevUserInfo, backgroundUrl: url }));
  };

  return (
    <Wrapper>
      <BackgroundImage src={backgroundImage} onError={handleBgImageError} />
      {isModify && (
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
      <BackgroundImageShadow />

      <UserPhoto isMy={isMy} isModify={isModify} imageUrl={profileUrl} />
      {!isModify && <BioSection nickname={nickname} introduction={introduction} />}
    </Wrapper>
  );
}

export default UserProfile;
