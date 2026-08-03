export type ZennArticle = {
  title: string;
  url: string;
  /** ISO 8601 形式。pubDate が不正な場合は持たない */
  publishedAt?: string;
};

export const ZENN_FEED_URL = "https://zenn.dev/nekonoko2323/feed";

/** 記事の表示件数 */
export const ARTICLE_LIMIT = 6;

/** 再検証間隔（秒）。App Hosting の ISR で再デプロイなしに記事を反映する */
export const REVALIDATE_SECONDS = 3600;

const CDATA_PATTERN = /^<!\[CDATA\[([\s\S]*)\]\]>$/;

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&apos;": "'",
  "&#39;": "'",
};

const unwrap = (value: string) => {
  const trimmed = value.trim();
  const cdata = trimmed.match(CDATA_PATTERN);
  if (cdata) {
    return cdata[1].trim();
  }
  return trimmed.replace(/&(amp|lt|gt|quot|apos|#39);/g, (m) => ENTITIES[m]);
};

const tagContent = (item: string, tag: string) => {
  const matched = item.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`));
  return matched ? unwrap(matched[1]) : undefined;
};

const toIsoString = (pubDate: string | undefined) => {
  if (!pubDate) {
    return undefined;
  }
  const parsed = new Date(pubDate);
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString();
};

/**
 * Zenn の RSS(2.0) をパースして記事一覧に変換する。
 *
 * Server Component は Node 上で動くため DOMParser を使えない。
 * 対象が Zenn の feed 1つに限られるため、依存を増やさず必要な要素だけを取り出す。
 */
export const parseZennFeed = (xml: string): ZennArticle[] => {
  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];

  return items.reduce<ZennArticle[]>((articles, item) => {
    const title = tagContent(item, "title");
    const url = tagContent(item, "link");

    // title か link を欠く item は記事として成立しないため落とす
    if (!title || !url) {
      return articles;
    }

    return [
      ...articles,
      {
        title,
        url,
        publishedAt: toIsoString(tagContent(item, "pubDate")),
      },
    ];
  }, []);
};

type FetchZennArticlesOptions = {
  limit?: number;
  /** テストから差し替えるための依存注入 */
  fetcher?: typeof fetch;
};

/**
 * Zenn の記事一覧を取得する。
 * 取得に失敗してもページ全体を壊さないよう、常に配列を返す。
 */
export const fetchZennArticles = async ({
  limit = ARTICLE_LIMIT,
  fetcher = (...args: Parameters<typeof fetch>) => fetch(...args),
}: FetchZennArticlesOptions = {}): Promise<ZennArticle[]> => {
  try {
    const response = await fetcher(ZENN_FEED_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return [];
    }

    return parseZennFeed(await response.text()).slice(0, limit);
  } catch {
    return [];
  }
};
