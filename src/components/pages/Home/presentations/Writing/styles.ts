import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { breakpoint } from "@/assets/styles/variable";
import { commonWrapperStyle } from "../../containers/commonStyle";

const writingWrapper = css`
  ${commonWrapperStyle}
`;

const cardsWrapper = css`
  display: grid;
  gap: var(--spacing-3);
  grid-template-columns: 1fr;
  padding: var(--spacing-4) 0 var(--spacing-9);

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const fallback = css`
  padding: var(--spacing-4) 0 var(--spacing-9);
  text-align: center;
`;

/** emotion styled components */
export const WritingWrapper = emotionStyled.section`${writingWrapper}`;
export const CardsWrapper = emotionStyled.div`${cardsWrapper}`;
export const Fallback = emotionStyled.div`${fallback}`;
