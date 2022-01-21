import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

import { MEDIA_QUERY } from './mixin';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');

  html,
  body {
    overflow: hidden;
    background-color: #EBEBEB;
    font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
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

  ${MEDIA_QUERY.large} {
    /* width > 700px */
  }
  ${MEDIA_QUERY.mobile} {
    /* width > 360px */
  }
  ${MEDIA_QUERY.small} {
    /* width < 360px */
  }
`;

export default GlobalStyle;
