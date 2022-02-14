import styled from 'styled-components';
import CollectedCookie from './CollectedCookie';

const Wrapper = styled.div`
  display: flex;
  flex: 33%;
  flex-wrap: wrap;
`;

function CollectedCookieGrid() {
  return (
    <Wrapper>
      {Array.from('hihihihihihi').map((_, value) => (
        <CollectedCookie index={value} />
      ))}
    </Wrapper>
  );
}

export default CollectedCookieGrid;
