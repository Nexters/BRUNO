import styled from 'styled-components';

import { formatTime } from '@src/utils/format';
import { Notification } from '@src/queries/types';
import { NotificationIcon } from '@src/assets/images';

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.basic.gray30};
`;

const Icon = styled.div`
  svg {
    width: 32px;
    height: 32px;
  }
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

function NotificationItem({ data }: { data: Notification }) {
  const category = data.type === 'Ask' ? '요청' : '판매';
  return (
    <Wrapper>
      <Icon>
        <NotificationIcon />
      </Icon>
      <Content>
        <Category>{category}</Category>
        <Detail>{data?.content}</Detail>
        <Date>{formatTime(data.createdAt)}</Date>
      </Content>
    </Wrapper>
  );
}

export default NotificationItem;
