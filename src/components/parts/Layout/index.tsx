"use client";
import { Global, css } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { globalStyle } from "@/assets/styles/global";
import { variables } from "@/assets/styles/variable";
import { defaultTheme } from "@/components/themes";
import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = {
  children: React.ReactNode;
};

const globalStyles = css`
  ${globalStyle} /* 以前のglobal.scss */

  ${variables} /* scssカスタムプロパティ */
`;

export const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Global styles={globalStyles} />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
