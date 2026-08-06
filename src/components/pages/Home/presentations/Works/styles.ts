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

  /* 下の余白はセクションの wrapper が持つ */
  padding-top: var(--spacing-4);

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    flex-flow: row wrap;
    justify-content: center;

    /* 3+ cards: 3 columns */
    > * {
      width: 31%;
    }

    /* exactly 1 card: centered */
    > *:only-child {
      max-width: 480px;
      width: 100%;
    }

    /* exactly 2 cards: 2 columns */
    > *:first-child:nth-last-child(2),
    > *:first-child:nth-last-child(2) ~ * {
      width: 48%;
    }
  }
`;

/** emotion styled components */
export const WorksWrapper = emotionStyled.section`${worksWrapper}`;
export const CardsWrapper = emotionStyled.div`${cardsWrapper}`;
