import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { commonWrapperStyle } from "../../containers/commonStyle";

const experienceWrapper = css`
  ${commonWrapperStyle}
  background-color: var(--bg-color-light);
`;

/** emotion styled components */
export const ExperienceWrapper = emotionStyled.section`${experienceWrapper}`;
