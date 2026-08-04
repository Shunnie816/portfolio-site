import { defineRouting } from "next-intl/routing";

/**
 * サイトが提供する言語の定義。
 *
 * 日本語と英語を対等に提供する方針（#65）のため、既定言語にも必ず prefix を付ける
 * （`localePrefix: "always"`）。prefix なしの `/` は proxy が `Accept-Language` を見て
 * `/en` か `/ja` へ振り分ける。
 */
export const routing = defineRouting({
  locales: ["en", "ja"],
  defaultLocale: "en",
  localePrefix: "always",
});
