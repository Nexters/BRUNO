import styled from 'styled-components';

import Icon from '@src/assets/Icon';

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  color: ${(props) => props.theme.colors.basic.gray90};
  border-bottom: 1px solid ${(props) => props.theme.colors.basic.gray30};
`;

const Category = styled.span`
  font-weight: 700;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  font-size: 16px;
`;

const Detail = styled.div`
  margin: 4px 0;
`;

const Date = styled.span`
  margin-bottom: 8px;
  font-size: 13px;
  color: ${(props) => props.theme.colors.basic.gray50};
`;

function NotificationItem() {
  return (
    <Wrapper>
      <Icon icon="notification" size={24} />
      <Content>
        <Category>요청</Category>
        <Detail>호평동 치타님이 ‘집 주소 어디일까어디일까요..’를 망치 3톤으로 구매했어요.</Detail>
        <Date>3분 전</Date>
      </Content>
    </Wrapper>
  );
}

export default NotificationItem;
