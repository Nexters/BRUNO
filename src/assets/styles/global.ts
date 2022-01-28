import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

import { ThemeType } from './theme';
import { MEDIA_QUERY } from './mixin';

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
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
    background: ${(props) => props.theme.background.main};
  }

  * {
    box-sizing: border-box;
  }

  button {
    border: none;
  }

  input {
    border: none;
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
