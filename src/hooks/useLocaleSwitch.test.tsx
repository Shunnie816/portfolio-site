import { renderHook } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import en from "../../messages/en.json";
import ja from "../../messages/ja.json";
import { useLocaleSwitch } from "./useLocaleSwitch";

const PATHNAME = "/";

// vi.mock は巻き上げられるため、モック関数は vi.hoisted で先に用意する
const { replaceMock } = vi.hoisted(() => ({ replaceMock: vi.fn() }));

vi.mock("@/i18n/navigation", () => ({
  useRouter: () => ({ replace: replaceMock }),
  usePathname: () => PATHNAME,
}));

// renderHook のコールバック内で生成すると参照が毎回変わるため、外で定義する
const EnglishProvider = ({ children }: { children: React.ReactNode }) => (
  <NextIntlClientProvider locale="en" messages={en}>
    {children}
  </NextIntlClientProvider>
);

const JapaneseProvider = ({ children }: { children: React.ReactNode }) => (
  <NextIntlClientProvider locale="ja" messages={ja}>
    {children}
  </NextIntlClientProvider>
);

describe("useLocaleSwitch", () => {
  beforeEach(() => {
    replaceMock.mockClear();
    window.location.hash = "";
  });

  it("should offer Japanese as the next locale when the page is in English", () => {
    const { result } = renderHook(() => useLocaleSwitch(), {
      wrapper: EnglishProvider,
    });

    expect(result.current.nextLocaleLabel).toBe(en.LanguageSwitcher.ja);
  });

  it("should offer English as the next locale when the page is in Japanese", () => {
    const { result } = renderHook(() => useLocaleSwitch(), {
      wrapper: JapaneseProvider,
    });

    expect(result.current.nextLocaleLabel).toBe(ja.LanguageSwitcher.en);
  });

  it("should navigate to the same path in the other locale", () => {
    const { result } = renderHook(() => useLocaleSwitch(), {
      wrapper: EnglishProvider,
    });

    result.current.switchLocale();

    expect(replaceMock).toHaveBeenCalledWith(PATHNAME, { locale: "ja" });
  });

  it("should keep the current section anchor when switching", () => {
    window.location.hash = "#works";

    const { result } = renderHook(() => useLocaleSwitch(), {
      wrapper: JapaneseProvider,
    });

    result.current.switchLocale();

    expect(replaceMock).toHaveBeenCalledWith(`${PATHNAME}#works`, {
      locale: "en",
    });
  });
});
