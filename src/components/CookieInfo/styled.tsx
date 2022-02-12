import styled from 'styled-components';

export const Title = styled.p`
  margin: 0 0 8px 0;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.body02};
`;

export const CookieArea = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.basic.gray20};
  color: ${(props) => props.theme.colors.basic.gray90};
`;

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 100%;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.body01};
  overflow-x: hidden;
`;

export const AnswerWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 16px;
`;

// 이미지 비율 9:5 -> padding-top 55%
export const CookieImage = styled.div`
  padding-top: 55%;
  width: 100%;
  margin-left: 8px;
  background: ${(props) => props.theme.background.style01};
  border-radius: 8px;
`;

export const HammerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;
export const Hammer = styled.span`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.large};
`;
export const HammerCount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.title01};
`;
export const HammerUnit = styled.span`
  font-weight: 400;
  font-size: ${(props) => props.theme.fontSize.body01};
`;

/// ///////////////////////////////////////////////

export const CreatorArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 20px 16px;
  color: ${(props) => props.theme.colors.basic.gray90};
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;
export const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 500px;
`;
export const UserName = styled.span`
  width: 100%;
  font-size: ${(props) => props.theme.fontSize.body02};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

/// ///////////////////////////////////////////////

export const CookieInfoArea = styled.div`
  padding: 0 16px;
  color: ${(props) => props.theme.colors.basic.gray90};
`;

export const CookieInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 4px;
  font-size: ${(props) => props.theme.fontSize.body02};
  color: ${(props) => props.theme.colors.basic.gray60};
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 20px;
`;

export const HistoryCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px 16px;
  background: #1a1c2c;
  border-radius: 10px;
  font-size: ${(props) => props.theme.fontSize.body02};
  color: ${(props) => props.theme.colors.basic.gray60};
`;

export const Time = styled.p`
  margin: 4px 0 0 0;
  font-size: ${(props) => props.theme.fontSize.caption};
  color: ${(props) => props.theme.colors.basic.gray50};
`;
