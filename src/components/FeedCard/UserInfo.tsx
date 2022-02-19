import { ProfileImage01 } from '@src/assets/images';
import styled from 'styled-components';

import { formatTime } from '@src/utils/format';
import { UserType } from './type';

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
  font-size: ${(props) => props.theme.fontSize.body02};
  font-weight: 500;
`;

const Time = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.basic.gray60};
`;

export default function UserInfo({ profile, name, createdAt: _createdAt }: UserType) {
  const created = formatTime(_createdAt);
  return (
    <Wrapper>
      <Profile src={profile || ProfileImage01} />
      <InfoWrapper>
        <UserName>{name}</UserName>
        <Time>{created}</Time>
      </InfoWrapper>
    </Wrapper>
  );
}
