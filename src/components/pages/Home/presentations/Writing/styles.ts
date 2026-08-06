import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { breakpoint } from "@/assets/styles/variable";
import { commonWrapperStyle } from "../../containers/commonStyle";

const writingWrapper = css`
  ${commonWrapperStyle}
  background-color: var(--bg-color-default);
`;

const cardsWrapper = css`
  display: grid;
  gap: var(--spacing-3);
  grid-template-columns: 1fr;

  /* 下の余白はセクションの wrapper が持つ */
  padding-top: var(--spacing-4);

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const fallback = css`
  padding-top: var(--spacing-4);
  text-align: center;
`;

/** emotion styled components */
export const WritingWrapper = emotionStyled.section`${writingWrapper}`;
export const CardsWrapper = emotionStyled.div`${cardsWrapper}`;
export const Fallback = emotionStyled.div`${fallback}`;
