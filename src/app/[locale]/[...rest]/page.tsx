import { notFound } from "next/navigation";

/**
 * `/en/...` `/ja/...` の未定義パスを 404 に落とすためのキャッチオール。
 * これがないと Next.js がロケール外の `app/not-found.tsx` を探しに行ってしまい、
 * 言語に応じた 404 ページが表示されない。
 */
export default function CatchAllPage() {
  notFound();
}
