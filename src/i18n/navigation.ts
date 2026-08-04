import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * locale prefix を自動で維持する `next/navigation` 互換 API。
 * ページ遷移やリンクにはこちらを使い、`next/navigation` を直接使わない。
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
