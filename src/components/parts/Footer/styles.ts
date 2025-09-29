import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { breakpoint } from "@/assets/styles/variable";

const wrapper = css`
  background-color: var(--bg-color-dark);
  padding: var(--spacing-12) var(--spacing-4) var(--spacing-10);
`;

const pcWrapper = css`
  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    padding: 0 var(--spacing-24) var(--spacing-2);

    .item:hover {
      cursor: pointer;
    }
  }
`;

const itemWrapper = css`
  align-items: flex-end;
  display: flex;
  gap: var(--spacing-2);
`;

const copyRight = css`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-3);
`;

/** emotion styled components */
export const Wrapper = emotionStyled.footer`${wrapper}`;
export const PcWrapper = emotionStyled.div`${pcWrapper}`;
export const ItemWrapper = emotionStyled.div`${itemWrapper}`;
export const CopyRight = emotionStyled.div`${copyRight}`;
