import { css } from "@emotion/react";
import { breakpoint } from "@/assets/styles/variable";

/**
 * Home内共通のwrapper style。
 *
 * セクションの上下余白はここが一次情報で、各セクションでは上書きしない。
 * 以前は下だけ 0 にして各セクションが個別に padding-bottom を足していたが、
 * PC 幅では下の shorthand（media query 内の padding）が個別指定を打ち消してしまい、
 * About セクションの下余白が 0 になっていた（#97）。
 */
export const commonWrapperStyle = css`
  display: flex;
  flex-direction: column;
  padding: var(--spacing-14) var(--spacing-4);

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    padding: var(--spacing-14) var(--spacing-24);
  }
`;
