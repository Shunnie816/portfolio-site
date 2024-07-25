import { createTheme } from "@mui/material";

// ここを変更したらvariables.scssも変更する
const COLOR_PALETTE = {
  darkNavy: "#201e43",
  navy: "#134b70",
  lightNavy: "#508c9b",
  gray: "#eeeeee",
  lightBlue: "#eef7ff",
};

/**
 * MUIのpalette
 * https://mui.com/material-ui/customization/default-theme/?expand-path=$.palette
 */

/** MUIのカスタムthemeを定義 */
export const defaultTheme = createTheme({
  palette: {
    primary: {
      main: COLOR_PALETTE.navy,
    },
    secondary: {
      main: COLOR_PALETTE.gray,
    },
    text: {
      primary: COLOR_PALETTE.gray,
      secondary: COLOR_PALETTE.darkNavy,
    },
    background: {
      default: COLOR_PALETTE.lightBlue,
    },
  },
  typography: {
    h1: {
      fontSize: "3rem", // 48px
    },
    h2: {
      fontSize: "2.5rem", // 40px
    },
    h3: {
      fontSize: "2rem", // 32px
    },
    h4: {
      fontSize: "1.75rem", // 28px
    },
    h5: {
      fontSize: "1.5rem", // 24px
    },
    h6: {
      fontSize: "1.25rem", // 20px
    },
    subtitle1: {
      fontSize: "1rem", // 16px
    },
    subtitle2: {
      fontSize: "0.875rem", // 14px
    },
    body1: {
      fontSize: "1rem", // 16px
    },
    body2: {
      fontSize: "0.875rem", // 14px
    },
  },
});
