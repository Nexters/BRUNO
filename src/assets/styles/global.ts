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
    background-color: ${(props) => props.theme.colors.basic.gray20};
    color: ${(props) => props.theme.colors.basic.gray100};
    font-family: 'Pretendard Variable', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  #root {
    display: flex;
    max-width: 700px;
    min-height: 100vh;
    margin: 0 auto;
    background: ${(props) => props.theme.colors.background.gradientBlack};
    font-size:  ${(props) => props.theme.fontSize.body02};
  }

  * {
    box-sizing: border-box;
    line-height: 160%;
    letter-spacing: 0.002em;
  }

  button, input, textarea {
    border: none;
    resize: none;
    outline: none;
    background: none;
  }

  button {
    cursor: pointer;
  }

  hr {
    border: none;
  }

  ${MEDIA_QUERY.large} {
    /* width > 700px */
  }
  ${MEDIA_QUERY.mobile} {
    /* width > 320px */
  }
  ${MEDIA_QUERY.small} {
    /* width < 320px */
  }
`;
