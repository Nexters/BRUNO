import { useNavigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ProfileImage01, ProfileImage02 } from '@src/assets/images';
import { Button } from '@src/components/shared/MainButton';
import Modal from '@src/components/shared/Modal';
import { UNIMPLEMENT_MODAL_LABEL } from '../shared/const';

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

const AddButton = styled.button`
  position: absolute;
  right: 0px;
  bottom: -4px;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  font-size: 16px;
  border: 1px solid #e4e5e9;
  color: ${(props) => props.theme.colors.basic.gray80};
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
  imageUrl: string;
}

function UserPhoto({ isMy, imageUrl }: Props) {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [modal, setModal] = useState('');

  const defaultImageUrl = isMy ? ProfileImage01 : ProfileImage02;
  const handleClickAskButton = () => navigate(`/ask/${userId}`);

  // eslint-disable-next-line no-return-assign
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => (e.currentTarget.src = ProfileImage01);

  return (
    <Wrapper>
      <PhotoWrapper>
        <Photo src={imageUrl || defaultImageUrl} onError={handleImageError} />
        {isMy && <AddButton onClick={() => setModal('프로필 수정하기')}>+</AddButton>}
      </PhotoWrapper>
      {!isMy && <RequestButton onClick={handleClickAskButton}>질문 요청하기</RequestButton>}
      <Modal open={!!modal} label={UNIMPLEMENT_MODAL_LABEL(modal)} onlyYes onClickYes={() => setModal('')} />
    </Wrapper>
  );
}

export default UserPhoto;
