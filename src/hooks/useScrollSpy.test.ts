import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const ABOUT_ID = "about";
const WORKS_ID = "works";
const MISSING_ID = "missing";

// boundingClientRect.top の大小関係だけが挙動に影響する
const UPPER_POSITION = 100;
const LOWER_POSITION = 500;

// ObserverCallback は型専用のグローバルで ESLint の no-undef が
// 解決できないため、同等のシグネチャをローカルに定義する
type ObserverCallback = (
  entries: IntersectionObserverEntry[],
  observer: IntersectionObserver
) => void;

/**
 * jsdom には IntersectionObserver がないためスタブで差し替える。
 * テストから observe 対象の確認と交差コールバックの発火ができる。
 */
class IntersectionObserverStub implements IntersectionObserver {
  static instances: IntersectionObserverStub[] = [];

  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds = [];
  readonly observedElements: Element[] = [];
  isDisconnected = false;

  private readonly callback: ObserverCallback;

  constructor(callback: ObserverCallback) {
    this.callback = callback;
    IntersectionObserverStub.instances.push(this);
  }

  observe(element: Element) {
    this.observedElements.push(element);
  }

  unobserve() {}

  disconnect() {
    this.isDisconnected = true;
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  /** テストから交差状態の変化を通知する */
  emit(entries: IntersectionObserverEntry[]) {
    this.callback(entries, this);
  }
}

const latestObserver = () => {
  const observer = IntersectionObserverStub.instances.at(-1);
  if (!observer) {
    throw new Error("IntersectionObserver が生成されていません");
  }
  return observer;
};

const createEntry = (
  elementId: string,
  top: number,
  isIntersecting = true
): IntersectionObserverEntry =>
  ({
    target: document.getElementById(elementId) as Element,
    isIntersecting,
    boundingClientRect: { top } as DOMRectReadOnly,
  }) as IntersectionObserverEntry;

const renderSections = (...ids: string[]) => {
  ids.forEach((id) => {
    const section = document.createElement("section");
    section.id = id;
    document.body.appendChild(section);
  });
};

describe("useScrollSpy", () => {
  const sectionIds = [ABOUT_ID, WORKS_ID];

  beforeEach(() => {
    vi.stubGlobal("IntersectionObserver", IntersectionObserverStub);
  });

  afterEach(() => {
    IntersectionObserverStub.instances = [];
    document.body.innerHTML = "";
    vi.unstubAllGlobals();
  });

  it("should return an empty string before any section intersects", () => {
    renderSections(ABOUT_ID, WORKS_ID);

    const { result } = renderHook(() => useScrollSpy({ sectionIds }));

    expect(result.current).toBe("");
  });

  it("should return the id of the intersecting section", () => {
    renderSections(ABOUT_ID, WORKS_ID);
    const { result } = renderHook(() => useScrollSpy({ sectionIds }));

    act(() => {
      latestObserver().emit([createEntry(WORKS_ID, UPPER_POSITION)]);
    });

    expect(result.current).toBe(WORKS_ID);
  });

  it("should return the topmost section id when multiple sections intersect", () => {
    renderSections(ABOUT_ID, WORKS_ID);
    const { result } = renderHook(() => useScrollSpy({ sectionIds }));

    act(() => {
      latestObserver().emit([
        createEntry(WORKS_ID, LOWER_POSITION),
        createEntry(ABOUT_ID, UPPER_POSITION),
      ]);
    });

    expect(result.current).toBe(ABOUT_ID);
  });

  it("should keep the current section when no section intersects", () => {
    renderSections(ABOUT_ID, WORKS_ID);
    const { result } = renderHook(() => useScrollSpy({ sectionIds }));

    act(() => {
      latestObserver().emit([createEntry(ABOUT_ID, UPPER_POSITION)]);
    });
    act(() => {
      latestObserver().emit([createEntry(ABOUT_ID, UPPER_POSITION, false)]);
    });

    expect(result.current).toBe(ABOUT_ID);
  });

  it("should not observe ids that do not exist in the document", () => {
    renderSections(ABOUT_ID);
    const idsWithMissingSection = [ABOUT_ID, MISSING_ID];

    renderHook(() => useScrollSpy({ sectionIds: idsWithMissingSection }));

    expect(latestObserver().observedElements.map((el) => el.id)).toEqual([
      ABOUT_ID,
    ]);
  });

  it("should disconnect the observer on unmount", () => {
    renderSections(ABOUT_ID, WORKS_ID);
    const { unmount } = renderHook(() => useScrollSpy({ sectionIds }));
    const observer = latestObserver();

    unmount();

    expect(observer.isDisconnected).toBe(true);
  });
});
