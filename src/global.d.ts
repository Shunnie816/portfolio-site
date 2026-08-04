import type { routing } from "@/i18n/routing";
import type messages from "../messages/en.json";

/**
 * `useTranslations` のキーと `Locale` 型を messages/en.json から導出する。
 * 存在しないキーを渡すとコンパイルエラーになり、ja 側の追従漏れもテストで検知する。
 */
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
