import { Home } from "@/components/pages/Home/containers";
import { fetchZennArticles } from "@/lib/zenn";

export default async function Page() {
  // Home は Client Component のため、取得は Server Component 側で行って props で渡す
  const articles = await fetchZennArticles();

  return <Home articles={articles} />;
}
