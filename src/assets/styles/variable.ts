import { css } from "@emotion/react";

/* breakpoint */
export const breakpoint = "768px";

/* layout */
export const headerHeight = "56px";

export const variables = css`
  /* light mode (default) */
  :root {
    /* spacing */
    --spacing-2: 8px;
    --spacing-3: 12px;
    --spacing-4: 16px;
    --spacing-6: 24px;
    --spacing-9: 36px;
    --spacing-10: 40px;
    --spacing-12: 48px;
    --spacing-14: 56px;
    --spacing-18: 72px;
    --spacing-24: 96px;

    /* color */
    --color-dark-navy: #201e43;
    --color-gray: #eee;
    --color-white: #fff;

    /* text color */
    --text-default: var(--color-dark-navy);

    /* background-color */
    --bg-color-default: var(--color-gray);
    --bg-color-dark: var(--color-dark-navy);
    --bg-color-light: var(--color-white);
  }

  /* dark mode overrides */
  [data-color-scheme="dark"] {
    --bg-color-default: var(--color-dark-navy);
    --bg-color-light: var(--color-white);

    /* --text-default はオーバーライドしない。常に darkNavy のままにする。
       ダーク背景セクション内のテキストは MUI sx で明示的に上書きする */
  }
`;
