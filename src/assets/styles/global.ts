import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    overflow: hidden;
    background-color: #EBEBEB;
  }
  #root {
    display: flex;
    max-width: 700px;
    min-height: 100vh;
    margin: 0 auto;
    background-color: white;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
