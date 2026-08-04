import { Global, css } from "@emotion/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import type { Decorator, Preview } from "@storybook/nextjs-vite";
import en from "../messages/en.json";
import ja from "../messages/ja.json";
import { globalStyle } from "../src/assets/styles/global";
import { variables } from "../src/assets/styles/variable";
import { defaultTheme } from "../src/components/themes";

const globalStyles = css`
  ${globalStyle} /* 以前のglobal.scss */

  ${variables} /* scssカスタムプロパティ */
`;

const MESSAGES = { en, ja };

/**
 * アプリ側は layout が NextIntlClientProvider を張るため、
 * Storybook でも同じ環境を用意しないと useTranslations が例外になる。
 * ツールバーの言語切り替えで両言語の見た目を確認できる。
 */
const withIntl: Decorator = (Story, context) => {
  const locale = context.globals.locale as keyof typeof MESSAGES;

  return (
    <NextIntlClientProvider locale={locale} messages={MESSAGES[locale]}>
      <Story />
    </NextIntlClientProvider>
  );
};

const withTheme: Decorator = (Story) => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <Global styles={globalStyles} />
    <Story />
  </ThemeProvider>
);

const preview: Preview = {
  decorators: [withIntl, withTheme],
  globalTypes: {
    locale: {
      description: "表示言語",
      toolbar: {
        icon: "globe",
        items: [
          { value: "en", title: "English" },
          { value: "ja", title: "日本語" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    locale: "en",
  },
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
