"use client";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

/**
 * 言語の切り替えを扱うフック。
 *
 * 提供する言語は2つのため、切り替え先は現在の locale から一意に決まる。
 * ヘッダー（PC）とドロワー（SP）で同じ挙動にするため、ここに集約している。
 */
export const useLocaleSwitch = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("LanguageSwitcher");

  const nextLocale =
    routing.locales.find((it) => it !== locale) ?? routing.defaultLocale;

  const switchLocale = () => {
    // 読んでいたセクションから離れないよう、ページ内アンカーを保ったまま切り替える
    router.replace(`${pathname}${window.location.hash}`, {
      locale: nextLocale,
    });
  };

  return {
    /** 切り替え先の言語名。ボタンのラベルに使う */
    nextLocaleLabel: t(nextLocale),
    switchLocale,
  };
};
