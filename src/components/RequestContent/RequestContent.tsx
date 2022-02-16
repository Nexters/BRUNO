import styled from 'styled-components';
import RequestItem from './RequestItem';

const Wrapper = styled.div`
  padding-top: 20px;
`;

const TEMP_REQUEST = [
  '세원이는 남자친구가 있을까요?세원이는 남자친구가 있을까요?세원이는 남자친구가 있을까요?세원이는 남자친구가 있을까요?세원이는 남자친구가 있을까요?세원이는 남자친구가 있을까요?세원이는 남자친구가 있을까요?',
  '이번 주 오를 주식 종목은?',
  '이번 주 오를 주식 종목은?',
];

interface Props {
  isMy?: boolean;
}

function RequestContent({ isMy = false }: Props) {
  return (
    <Wrapper>
      {TEMP_REQUEST.map((question) => (
        <RequestItem key={question} question={question} isMy={isMy} />
      ))}
    </Wrapper>
  );
}

export default RequestContent;
