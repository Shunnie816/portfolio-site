import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";

const listWrapper = css`
  align-items: center;
  display: flex;
  gap: var(--spacing-2);
  justify-content: center;
`;

/** emotion styled components */
export const ListWrapper = emotionStyled.div`${listWrapper}`;
