import { describe, expect, it, vi } from "vitest";
import { fetchZennArticles, parseZennFeed } from "@/lib/zenn";

const TITLE = "React Hook Form × Zodで実務に耐えるフォーム実装を作る";
const URL = "https://zenn.dev/nekonoko2323/articles/f2c9e9f7d6d09b";
const PUB_DATE = "Fri, 31 Oct 2025 21:00:02 GMT";
const PUB_DATE_ISO = "2025-10-31T21:00:02.000Z";
// 実際の feed は enclosure と dc:creator を含む。パーサがこれらを無視できることも兼ねて再現する
const EXTRA_TAGS =
  '<enclosure url="https://res.cloudinary.com/zenn/og-base.png" length="0" type="false"/><dc:creator>ねこのこ</dc:creator>';

const buildItem = ({
  title = `<![CDATA[${TITLE}]]>`,
  link = URL,
  pubDate = PUB_DATE,
}: Partial<Record<"title" | "link" | "pubDate", string>> = {}) =>
  [
    "<item>",
    title === "" ? "" : `<title>${title}</title>`,
    link === "" ? "" : `<link>${link}</link>`,
    pubDate === "" ? "" : `<pubDate>${pubDate}</pubDate>`,
    EXTRA_TAGS,
    "</item>",
  ].join("");

const buildFeed = (...items: string[]) =>
  `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel>${items.join("")}</channel></rss>`;

const createResponse = ({ ok = true, body = "" } = {}) =>
  ({ ok, text: async () => body }) as Response;

describe("parseZennFeed", () => {
  it("should return an article for each item in the feed", () => {
    const feed = buildFeed(buildItem(), buildItem());

    expect(parseZennFeed(feed)).toHaveLength(2);
  });

  it("should strip the CDATA wrapper from the title", () => {
    const feed = buildFeed(buildItem());

    expect(parseZennFeed(feed)[0].title).toBe(TITLE);
  });

  it("should decode HTML entities in a title without CDATA", () => {
    const feed = buildFeed(buildItem({ title: "Router &amp; Cache" }));

    expect(parseZennFeed(feed)[0].title).toBe("Router & Cache");
  });

  it("should expose the article url", () => {
    const feed = buildFeed(buildItem());

    expect(parseZennFeed(feed)[0].url).toBe(URL);
  });

  it("should convert pubDate to an ISO string", () => {
    const feed = buildFeed(buildItem());

    expect(parseZennFeed(feed)[0].publishedAt).toBe(PUB_DATE_ISO);
  });

  it("should return an empty array when the feed has no items", () => {
    expect(parseZennFeed(buildFeed())).toEqual([]);
  });

  it("should return an empty array when the input is not a feed", () => {
    expect(parseZennFeed("<html><body>not a feed</body></html>")).toEqual([]);
  });

  it("should skip an item that has no title", () => {
    const feed = buildFeed(buildItem({ title: "" }), buildItem());

    expect(parseZennFeed(feed)).toHaveLength(1);
  });

  it("should skip an item that has no link", () => {
    const feed = buildFeed(buildItem({ link: "" }), buildItem());

    expect(parseZennFeed(feed)).toHaveLength(1);
  });

  it("should omit publishedAt when pubDate is invalid", () => {
    const feed = buildFeed(buildItem({ pubDate: "not a date" }));

    expect(parseZennFeed(feed)[0].publishedAt).toBeUndefined();
  });
});

describe("fetchZennArticles", () => {
  it("should return the articles from the fetched feed", async () => {
    const fetcher = vi.fn(async () =>
      createResponse({ body: buildFeed(buildItem()) })
    );

    const articles = await fetchZennArticles({ fetcher });

    expect(articles).toEqual([
      { title: TITLE, url: URL, publishedAt: PUB_DATE_ISO },
    ]);
  });

  it("should return at most the requested number of articles", async () => {
    const feed = buildFeed(buildItem(), buildItem(), buildItem());
    const fetcher = vi.fn(async () => createResponse({ body: feed }));

    const articles = await fetchZennArticles({ limit: 2, fetcher });

    expect(articles).toHaveLength(2);
  });

  it("should return an empty array when the response is not ok", async () => {
    const fetcher = vi.fn(async () => createResponse({ ok: false }));

    await expect(fetchZennArticles({ fetcher })).resolves.toEqual([]);
  });

  it("should return an empty array when the request throws", async () => {
    const fetcher = vi.fn(async () => {
      throw new Error("network down");
    });

    await expect(fetchZennArticles({ fetcher })).resolves.toEqual([]);
  });
});
