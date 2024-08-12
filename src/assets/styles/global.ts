import { css } from "@emotion/react";

export const globalStyle = css`
  html {
    scroll-behavior: smooth;
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
