import { createTheme } from "@mui/material";
import { Mulish } from "next/font/google";
import { COLOR as COLOR_PALETTE } from "@/assets/styles/colors";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
});

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

// palette.mode を設定しない = MUI デフォルト(light)の component スタイルを維持
// 元の defaultTheme と同じ挙動になり、Stepper/Divider 等が崩れない
export const darkTheme = createTheme({
  palette: {
    primary: {
      main: COLOR_PALETTE.navy,
    },
    secondary: {
      main: COLOR_PALETTE.gray,
      // 唯一の利用先が WorkCard のヘッダー帯で、カードは常に白いサーフェス。
      // lightGray だと白地に埋もれるため、lightTheme と同じ lightBlue に揃える（#98）
      light: COLOR_PALETTE.lightBlue,
      dark: COLOR_PALETTE.mediumGray,
    },
    text: {
      primary: COLOR_PALETTE.gray,
      secondary: COLOR_PALETTE.lightNavy, // 暗背景で読めるトーン
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
      light: COLOR_PALETTE.lightBlue, // lightGray はページ背景と同色になるため lightBlue に変更
      dark: COLOR_PALETTE.mediumGray,
    },
    text: {
      primary: COLOR_PALETTE.darkNavy,
      secondary: COLOR_PALETTE.fog, // 白背景で読めるトーン
      disabled: COLOR_PALETTE.fog,
    },
    background: {
      default: COLOR_PALETTE.lightGray,
      paper: COLOR_PALETTE.white,
    },
  },
  typography,
});
