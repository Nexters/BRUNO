import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.theme.colors.gray70};
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

function App() {
  return (
    <div className="App">
      <Button>Hello, BRUNO!</Button>
    </div>
  );
}

export default App;
