import { CookieHistory, CookieHistoryAction } from '@src/queries/types';
import { formatTime } from '@src/utils/format';
import { CardWrapper, HistoryCard, Time, Title } from './styled';

type Props = {
  historyList: CookieHistory[];
};

const HISTORY_TITLE_TEXT = {
  [CookieHistoryAction.BUY]: '구매',
  [CookieHistoryAction.MODIFY]: '수정',
  [CookieHistoryAction.CREATE]: '생성',
};

function CookieHistorySection({ historyList }: Props) {
  return (
    <CardWrapper>
      {historyList.map(({ action, content, createdAt }) => (
        <HistoryCard>
          <Title>{HISTORY_TITLE_TEXT[action]}</Title>
          {content}
          <Time>{formatTime(createdAt)}</Time>
        </HistoryCard>
      ))}
    </CardWrapper>
  );
}

export default CookieHistorySection;
