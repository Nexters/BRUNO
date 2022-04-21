import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Icon from '@src/assets/Icon';
import { theme } from '@src/assets/styles';
import { ProfileImage01, ProfileImage02 } from '@src/assets/images';
import { Button } from '@src/components/shared/MainButton';
import Modal from '../shared/Modal';

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
  z-index: 5;
`;

interface Props {
  isMy: boolean;
  isModify?: boolean;
  imageUrl: string;
}

const label = {
  title: '이미지를 변경하시겠어요?',
  description: '새로 촬영하거나 앨범에서 선택할 수 있어요.',
  yes: '새로 촬영',
  no: '앨범에서 선택',
};
function UserPhoto({ isMy, isModify = false, imageUrl }: Props) {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [openModifyModal, setOpenModifyModal] = useState<boolean>(false);

  const setModifyMode = () => {
    navigate('/users/modify');
  };

  const defaultImageUrl = !isModify && isMy ? ProfileImage01 : ProfileImage02;
  const handleClickAskButton = () => navigate(`/ask/${userId}`);

  // eslint-disable-next-line no-return-assign
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = ProfileImage01);

  return (
    <Wrapper>
      <PhotoWrapper>
        <Photo src={imageUrl || defaultImageUrl} onError={handleImageError} />
        {isMy && !isModify && (
          <ActionButton onClick={setModifyMode}>
            <Icon icon="plus18" size={18} color={theme.colors.basic.gray90} />
          </ActionButton>
        )}
        {isModify && (
          <>
            <ActionButton onClick={() => setOpenModifyModal(true)}>
              <Icon icon="edit18" size={14} color={theme.colors.basic.gray90} noFill />
            </ActionButton>

            <Modal
              open={openModifyModal}
              label={label}
              onClickYes={() => console.log('yes')}
              onClickNo={() => console.log('no')}
            />
          </>
        )}
      </PhotoWrapper>
      {!isMy && <RequestButton onClick={handleClickAskButton}>질문 요청하기</RequestButton>}
    </Wrapper>
  );
}

export default UserPhoto;
