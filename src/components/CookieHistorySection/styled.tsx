import styled from 'styled-components';

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

export const Title = styled.div`
  margin-bottom: 4px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.basic.gray90};
  font-size: ${(props) => props.theme.fontSize.body02};
`;

export const Time = styled.p`
  margin: 4px 0 0 0;
  font-size: ${(props) => props.theme.fontSize.caption};
  color: ${(props) => props.theme.colors.basic.gray50};
`;
