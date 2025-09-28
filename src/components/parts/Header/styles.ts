import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { breakpoint, headerHeight } from "@/assets/styles/variable";

const menuButton = css`
  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    display: none;
  }
`;

const pcHeadermenu = css`
  display: none;
  margin: 0;

  /* stylelint-disable-next-line media-query-no-invalid */
  @media (min-width: ${breakpoint}) {
    display: flex;
  }
`;

/** emotion styled components */
export const MenuButton = emotionStyled.div`${menuButton}`;
export const PcHeaderMenu = emotionStyled.ul`${pcHeadermenu}`;

/** MUI sx styles */
export const appBarSx = {
  backgroundColor: "background.default",
  boxShadow: "none",
  justifyContent: "center",
  maxHeight: headerHeight,
  opacity: "0.8",
};

export const toolbarSx = {
  display: "flex",
  justifyContent: "space-between",
  [`@media (min-width: ${breakpoint})`]: {
    padding: "0 72px",
  },
};
