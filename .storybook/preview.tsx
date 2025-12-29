import { Global, css } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import type { Preview } from "@storybook/nextjs-vite";
import { globalStyle } from "../src/assets/styles/global";
import { variables } from "../src/assets/styles/variable";
import { defaultTheme } from "../src/components/themes";

const globalStyles = css`
  ${globalStyle} /* 以前のglobal.scss */

  ${variables} /* scssカスタムプロパティ */
`;

const withTheme = (Story: React.ComponentType) => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <Global styles={globalStyles} />
    <Story />
  </ThemeProvider>
);

const preview: Preview = {
  decorators: [withTheme],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
