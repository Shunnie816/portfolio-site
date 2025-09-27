import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { breakpoint } from "@/assets/styles/variable";
import { commonWrapperStyle } from "../../containers/commonStyle";

const worksWrapper = css`
  ${commonWrapperStyle}
`;

const cardsWrapper = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  padding: var(--spacing-4) 0 var(--spacing-9);

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    flex-flow: row wrap;
    justify-content: center;

    .child {
      margin: 0 var(--spacing-1);
      width: 31%;
    }
  }
`;

/** emotion styled components */
export const WorksWrapper = emotionStyled.section`${worksWrapper}`;
export const CardsWrapper = emotionStyled.div`${cardsWrapper}`;
