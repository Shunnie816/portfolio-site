import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { breakpoint } from "@/assets/styles/variable";
import { commonWrapperStyle } from "../../containers/commonStyle";

const experienceWrapper = css`
  ${commonWrapperStyle}
  background-color: var(--bg-color-light);
  padding-bottom: var(--spacing-9);

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    padding-bottom: var(--spacing-9);
  }
`;

/** emotion styled components */
export const ExperienceWrapper = emotionStyled.section`${experienceWrapper}`;
