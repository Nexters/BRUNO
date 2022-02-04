import { ProfileImage01 } from '@src/assets/images';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  border: 100%;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 8px;
`;

const UserName = styled.p`
margin: 0;
font-size: ${(props) => props.theme.fontSize.body02}
font-weight: 500;
`;

const Time = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.gray60};
`;

export default function UserInfo() {
  return (
    <Wrapper>
      <Profile src={ProfileImage01} />
      <InfoWrapper>
        <UserName>Username</UserName>
        <Time>32 min age</Time>
      </InfoWrapper>
    </Wrapper>
  );
}
