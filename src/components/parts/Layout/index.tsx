"use client";
import { Global, css } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { globalStyle } from "@/assets/styles/global";
import { variables } from "@/assets/styles/variable";
import { darkTheme, lightTheme } from "@/components/themes";
import { ThemeModeProvider } from "@/contexts/ThemeContext";
import { useThemeMode } from "@/hooks/useThemeMode";
import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = {
  children: React.ReactNode;
};

const globalStyles = css`
  ${globalStyle} /* 以前のglobal.scss */

  ${variables} /* scssカスタムプロパティ */
`;

const LayoutInner = ({ children }: Props) => {
  const { mode } = useThemeMode();
  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={globalStyles} />
      <Header />
      {children}
      {/* Footer は常にダーク背景のため darkTheme で固定する */}
      <ThemeProvider theme={darkTheme}>
        <Footer />
      </ThemeProvider>
    </ThemeProvider>
  );
};

export const Layout = ({ children }: Props) => {
  return (
    <ThemeModeProvider>
      <LayoutInner>{children}</LayoutInner>
    </ThemeModeProvider>
  );
};
