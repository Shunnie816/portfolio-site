import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { breakpoint } from "@/assets/styles/variable";

const pcLayout = css`
  display: none;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    display: block;
  }
`;

const spLayout = css`
  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    display: none;
  }
`;

/** emotion styled components */
export const PcLayout = emotionStyled.section`${pcLayout}`;
export const SpLayout = emotionStyled.section`${spLayout}`;
