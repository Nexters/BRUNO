import styled from 'styled-components';
import { Button } from '@src/components/shared/MainButton';
import { useNavigate, useParams } from 'react-router-dom';

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
  border: 4px solid #ffffff;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.basic.gray10};
`;

const Photo = styled.img``;

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
  width: 160px;
  height: 40px;
  margin-bottom: 5px;
  line-height: 120%;
  background: ${(props) => props.theme.colors.brand.main};
`;

interface Props {
  isMy: boolean;
}

function UserPhoto({ isMy }: Props) {
  const navigate = useNavigate();
  const { userId } = useParams();

  const handleClickAskButton = () => navigate(`/ask/${userId}`);

  return (
    <Wrapper>
      <PhotoWrapper>
        <Photo />
        {isMy && <AddButton>+</AddButton>}
      </PhotoWrapper>
      {!isMy && (
        <RequestButton onClick={handleClickAskButton}>Ask Me</RequestButton>
      )}
    </Wrapper>
  );
}

export default UserPhoto;
