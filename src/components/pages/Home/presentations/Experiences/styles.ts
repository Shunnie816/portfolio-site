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

const projectWrapper = css`
  margin-left: var(--spacing-4);
  margin-top: var(--spacing-3);

  .details {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2);
    margin-top: var(--spacing-2);
  }

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    margin-left: var(--spacing-18);
  }
`;

const titleWrapper = css`
  margin-left: var(--spacing-4);

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    margin-left: var(--spacing-18);
  }
`;

/** emotion styled components */
export const ExperienceWrapper = emotionStyled.section`${experienceWrapper}`;
export const ProjectWrapper = emotionStyled.div`${projectWrapper}`;
export const TitleWrapper = emotionStyled.div`${titleWrapper}`;
