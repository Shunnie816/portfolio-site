import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Home } from "@/components/pages/Home/containers";
import { routing } from "@/i18n/routing";
import { fetchZennArticles } from "@/lib/zenn";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  // Home は Client Component のため、取得は Server Component 側で行って props で渡す
  const articles = await fetchZennArticles();

  return <Home articles={articles} />;
}
