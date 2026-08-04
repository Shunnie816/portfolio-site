import { useEffect, useState } from "react";

interface UseScrollSpyOptions {
  sectionIds: string[];
  threshold?: number;
  rootMargin?: string;
}

/**
 * ヘッダー直下に置く細い検出バンド（ビューポート高の 15%〜20%）。
 *
 * 「セクション自身の 30% が見えているか」で判定すると、背の低いセクション
 * （Works / Writing など）が縮小されたルート内で閾値に届かず、隣のセクションが
 * 選ばれてしまう。バンドを横切っているかどうかで判定することで、
 * セクションの高さによらずヘッダー直下にあるセクションを正しく選べる。
 */
const DETECTION_BAND = "-15% 0px -80% 0px";

export const useScrollSpy = ({
  sectionIds,
  threshold = 0,
  rootMargin = DETECTION_BAND,
}: UseScrollSpyOptions) => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // 表示されているセクションの中で最も上に近いものを選択
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    // 各セクションを監視対象に追加
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, threshold, rootMargin]);

  return activeSection;
};
