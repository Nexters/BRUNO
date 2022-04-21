import { useMemo } from 'react';
import { useQuery } from 'react-query';

import NotificationSection from '@src/components/NotificationSection';
import { getUserNotifications } from '@src/queries/users';
import { useLogin } from '@src/hooks';
import { Notification } from '@src/queries/types';

function NotificationPage() {
  const { userId } = useLogin();
  const { data, error } = useQuery<Notification[]>(['user', 'notifications'], () => getUserNotifications(userId));

  const notifications = useMemo(() => {
    if (!data || error) return [];
    const mapped: { [key in string]: Notification[] } = {};
    data.forEach((notification) => {
      const date = new Date(notification?.createdAt);
      const dateString = date.toISOString().substring(0, 10);
      if (mapped[dateString]) mapped[dateString].push(notification);
      else mapped[dateString] = [notification];
    });
    return mapped;
  }, [data, error]);
  return (
    <div>
      {Object.entries(notifications).map(([date, _notifications]) => (
        <NotificationSection key={date} date={date} notifications={_notifications} />
      ))}
    </div>
  );
}

export default NotificationPage;
