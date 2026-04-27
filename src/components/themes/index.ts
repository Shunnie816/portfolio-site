import { createTheme } from "@mui/material";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
});

// ここを変更したらvariable.tsも変更する
const COLOR_PALETTE = {
  darkNavy: "#201e43",
  navy: "#134b70",
  lightNavy: "#508c9b",
  gray: "#eeeeee",
  lightGray: "#fafafa",
  lightBlue: "#eef7ff",
  fog: "#64748b",
};

const typography = {
  fontFamily: mulish.style.fontFamily,
  h1: { fontSize: "3rem" },
  h2: { fontSize: "2.5rem" },
  h3: { fontSize: "2rem" },
  h4: { fontSize: "1.75rem" },
  h5: { fontSize: "1.5rem" },
  h6: { fontSize: "1.25rem" },
  subtitle1: { fontSize: "1rem" },
  subtitle2: { fontSize: "0.875rem" },
  body1: { fontSize: "1rem" },
  body2: { fontSize: "0.875rem" },
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: COLOR_PALETTE.navy,
    },
    secondary: {
      main: COLOR_PALETTE.gray,
      light: COLOR_PALETTE.lightGray,
    },
    text: {
      primary: COLOR_PALETTE.gray,
      secondary: COLOR_PALETTE.darkNavy,
      disabled: COLOR_PALETTE.fog,
    },
    background: {
      default: COLOR_PALETTE.darkNavy,
      paper: COLOR_PALETTE.gray,
    },
  },
  typography,
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: COLOR_PALETTE.navy,
    },
    secondary: {
      main: COLOR_PALETTE.darkNavy,
      light: COLOR_PALETTE.lightGray,
    },
    text: {
      primary: COLOR_PALETTE.darkNavy,
      secondary: COLOR_PALETTE.gray,
      disabled: COLOR_PALETTE.fog,
    },
    background: {
      default: COLOR_PALETTE.lightGray,
      paper: "#ffffff",
    },
  },
  typography,
});
