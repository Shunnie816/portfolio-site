export const URL = {
  GITHUB: "https://github.com/Shunnie816",
  ZENN: "https://zenn.dev/nekonoko2323",
  STUDY_TRACKER: "https://study-tracker.shunniehub.com",
  STUDY_TRACKER_REPO: "https://github.com/Shunnie816/study-tracker-next",
  STUDY_TRACKER_ZENN: "https://zenn.dev/nekonoko2323/articles/795d624f3293c7",
  AI_RADAR: "https://ai-radar.shunniehub.com",
  AI_RADAR_REPO: "https://github.com/Shunnie816/ai-radar",
};
/**
 * セクションの並び順。Header / DrawerNav / Footer / useScrollSpy が
 * すべてここを参照するため、セクションを増減するときはここだけを編集する。
 *
 * 並び順は #65 の「アウトプットへの導線」を優先し、
 * 実績（Works / Writing）を経歴（Experiences）より前に置いている。
 */
export const NAV_ITEMS = [
  { text: "Home", anchor: "home" },
  { text: "About", anchor: "about" },
  { text: "Works", anchor: "works" },
  { text: "Writing", anchor: "writing" },
  { text: "Experiences", anchor: "experiences" },
];

/** Footer は先頭の Home を持たない */
export const FOOTER_NAV_ITEMS = NAV_ITEMS.filter(
  (item) => item.anchor !== "home"
);

/**
 * スクロール監視の対象。
 * useScrollSpy の useEffect 依存に渡るため、レンダーごとに生成せず定数として持つ。
 */
export const SECTION_IDS = NAV_ITEMS.map((item) => item.anchor);
