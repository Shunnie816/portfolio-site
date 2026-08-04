import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/**
 * Next.js 16 で `middleware` は `proxy` に改称された。
 * `Accept-Language` から言語を判定して `/en` か `/ja` へ振り分け、
 * 明示的に切り替えたあとは next-intl が Cookie（`NEXT_LOCALE`）を優先する。
 */
export default createMiddleware(routing);

export const config = {
  // API / Next.js の内部パス / 拡張子付きのファイルは対象外にする
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
