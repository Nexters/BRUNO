import styled from 'styled-components';

import { Notification } from '@src/queries/types';
import NotificationItem from './NotificationItem';

const SectionWrapper = styled.div`
  padding-top: 16px;
  color: ${(props) => props.theme.colors.basic.gray90};
`;

const Date = styled.div`
  margin: 0 20px;
  font-weight: 700;
  font-size: 16px;
`;

interface Props {
  date: string;
  notifications: Notification[];
}

function NotificationSection({ date, notifications }: Props) {
  return (
    <SectionWrapper>
      <Date>{date}</Date>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} data={notification} />
      ))}
    </SectionWrapper>
  );
}

export default NotificationSection;
