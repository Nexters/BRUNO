import styled from 'styled-components';

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

function NotificationSection() {
  return (
    <SectionWrapper>
      <Date>2022-04-19</Date>
      <NotificationItem />
      <NotificationItem />
    </SectionWrapper>
  );
}

export default NotificationSection;
