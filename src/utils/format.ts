import { differenceInMinutes, differenceInHours, differenceInCalendarDays, format } from 'date-fns';

export const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();

  const diffMin = Math.abs(differenceInMinutes(date, now));
  const diffHour = Math.abs(differenceInHours(date, now));
  const diffDays = Math.abs(differenceInCalendarDays(date, now));

  if (diffMin < 60) return `${diffMin}분 전`;
  if (diffHour < 24) return `${diffHour}시간 전`;
  if (diffDays < 8) return `${diffHour}일 전`;
  return format(date, 'yyyy년 MM월 dd일');
};
