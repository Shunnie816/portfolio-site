import { css } from "@emotion/react";

/* breakpoint */
export const breakpoint = "768px";

/* layout */
export const headerHeight = "56px";

export const variables = css`
  :root {
    /* font-size */
    --fontSizeXXS: 10px;
    --fontSizeXS: 12px;
    --fontSizeS: 14px;
    --fontSizeM: 16px;
    --fontSizeL: 18px;
    --fontSizeXL: 20px;
    --fontSizeXXL: 24px;

    /* spacing */
    --spacing-1: 4px;
    --spacing-2: 8px;
    --spacing-3: 12px;
    --spacing-4: 16px;
    --spacing-5: 20px;
    --spacing-6: 24px;
    --spacing-8: 32px;
    --spacing-9: 36px;
    --spacing-10: 40px;
    --spacing-12: 48px;
    --spacing-14: 56px;
    --spacing-16: 64px;
    --spacing-18: 72px;
    --spacing-24: 96px;

    /* color */
    --color-dark-navy: #201e43;
    --color-navy: #134b70;
    --color-light-navy: #508c9b;
    --color-gray: #eee;
    --color-light-blue: #cde8e5;
    --color-white: #fff;

    /* text color */
    --text-default: var(--color-dark-navy);
    --text-normal: rgb(0 0 0 / 87%);
    --text-dark: var(--color-color-gray);

    /* background-color */
    --bg-color-default: var(--color-gray);
    --bg-color-dark: var(--color-dark-navy);
    --bg-color-light: var(--color-white);
  }
`;
