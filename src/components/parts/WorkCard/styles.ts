import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";

const linkContainer = css`
  align-items: center;
  display: flex;
  gap: var(--spacing-2);
  margin-top: var(--spacing-2);
`;

const linksWrapper = css`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
  margin-bottom: var(--spacing-2);
`;

/** emotion styled components */
export const LinkContainer = emotionStyled.div`${linkContainer}`;
export const LinksWrapper = emotionStyled.div`${linksWrapper}`;

/** MUI sx styles */
export const cardSx = {
  backgroundColor: "common.white",
};

export const cardHeaderSx = {
  backgroundColor: "secondary.light",
  color: "primary.dark",
  maxHeight: "48px",
};

export const dividerSx = {
  borderColor: "primary.main",
};

export const descriptionSx = {
  color: "primary.dark",
};

export const chipSx = {
  marginRight: 0.5,
  mt: 1,
};

export const titleSx = {
  color: "primary.dark",
};
