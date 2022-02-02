// import { useEffect } from 'react';
// import styled from 'styled-components';

import RequestItem from './RequestItem';

const TEMP_REQUEST = [
  '세원이는 남자친구가 있을까요?',
  '이번 주 오를 주식 종목은?',
  '이번 주 오를 주식 종목은?',
];

interface Props {
  isMy?: boolean;
}

function RequestContent({ isMy = false }: Props) {
  return (
    <div>
      {isMy && <div>my</div>}
      {TEMP_REQUEST.map((question) => (
        <RequestItem question={question} />
      ))}
    </div>
  );
}

export default RequestContent;
