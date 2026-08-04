import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Layout } from "@/components/parts/Layout";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import type { ReactNode } from "react";

/**
 * `params.locale` は Next.js が生成する `LayoutProps` に合わせて `string` で受ける。
 * CI は `next build` より先に `tsc --noEmit` を実行するため、生成型（`LayoutProps`）に
 * 依存すると型チェックが落ちる。絞り込みは `hasLocale` で実行時に行う。
 */
type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

/** ビルド時に /en と /ja を静的生成する */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale: requested } = await params;
  // 不正な locale はレイアウト本体が 404 にするため、ここでは既定言語で解決しておく
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    // 検索エンジンに両言語が対等な版であることを伝える
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((it) => [it, `/${it}`])
      ),
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 配下の Server Component を静的レンダリングの対象にする
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <AppRouterCacheProvider>
          {/* Layout 以下は Client Component のため、翻訳をここから配る */}
          <NextIntlClientProvider>
            <Layout>{children}</Layout>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
