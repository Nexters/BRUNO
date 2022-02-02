import styled from 'styled-components';
import { Button } from '@src/components/shared/MainButton';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 12px;
  padding: 0 20px;
`;

const PhotoWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border: 4px solid #ffffff;
  border-radius: 100%;
  background-color: #9d9d9d;
`;

const Photo = styled.img``;

const AddButton = styled.button`
  position: absolute;
  right: -4px;
  bottom: -4px;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  font-size: 16px;
`;

const RequestButton = styled(Button)`
  width: 200px;
  height: 48px;
  margin-bottom: 5px;
  line-height: 120%;
  background: ${(props) => props.theme.background.button01};
`;

interface Props {
  isMy: boolean;
}

function UserPhoto({ isMy }: Props) {
  return (
    <Wrapper>
      <PhotoWrapper>
        <Photo />
        {isMy && <AddButton>+</AddButton>}
      </PhotoWrapper>
      {!isMy && <RequestButton>질문 요청하기</RequestButton>}
    </Wrapper>
  );
}

export default UserPhoto;
