import { css } from "@emotion/react";
import { breakpoint } from "@/assets/styles/variable";

/** Home内共通のwrapper style */
export const commonWrapperStyle = css`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-14) var(--spacing-4) 0;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    padding: var(--spacing-14) var(--spacing-24) 0;
  }
`;
