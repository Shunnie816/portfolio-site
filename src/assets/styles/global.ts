import { css } from "@emotion/react";
import { headerHeight } from "./variable";

export const globalStyle = css`
  html {
    scroll-behavior: smooth;
    scroll-padding-top: ${headerHeight}; /* ヘッダーの高さに合わせて調整 */
  }

  body {
    background-color: var(--bg-color-default);
    color: var(--text-default);
  }

  a {
    color: var(--text-default);
    text-decoration: none;
  }
`;
