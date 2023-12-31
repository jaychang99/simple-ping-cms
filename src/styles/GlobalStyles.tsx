import { css, Global, Theme, useTheme } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { fontFace } from 'styles/fontFace';
import { resetAnchorStyle } from 'styles/reset/resetAnchorStyle';
import { resetButtonStyle } from 'styles/reset/resetButtonStyle';

const globalStyles = (theme: Theme) => css`
  ${emotionReset}
  ${resetButtonStyle}
  ${resetAnchorStyle}
  ${fontFace}

  html, body {
    min-height: 100%;
    word-break: keep-all;
    line-height: 1;
    letter-spacing: -0.005em;

    font-size: 16px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;

    overflow-x: hidden;
  }

  body {
  }

  #__next {
    /* overflow-x: hidden; */ // 모달 스크롤바 문제 발생시 주석 해제 바람
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;

export function GlobalStyles() {
  const theme = useTheme();

  return <Global styles={globalStyles(theme)} />;
}
