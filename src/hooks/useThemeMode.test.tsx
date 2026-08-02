import { act, renderHook } from "@testing-library/react";
import { type ReactNode } from "react";
import { beforeEach, describe, expect, it } from "vitest";
import { ThemeModeProvider } from "@/contexts/ThemeContext";
import { useThemeMode } from "@/hooks/useThemeMode";

const STORAGE_KEY = "theme";
const COLOR_SCHEME_ATTRIBUTE = "data-color-scheme";

const wrapper = ({ children }: { children: ReactNode }) => (
  <ThemeModeProvider>{children}</ThemeModeProvider>
);

const colorSchemeAttribute = () =>
  document.documentElement.getAttribute(COLOR_SCHEME_ATTRIBUTE);

describe("useThemeMode", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute(COLOR_SCHEME_ATTRIBUTE);
  });

  it("should start in dark mode when nothing is stored", () => {
    const { result } = renderHook(() => useThemeMode(), { wrapper });

    expect(result.current.mode).toBe("dark");
  });

  it("should start in light mode when light is stored", () => {
    localStorage.setItem(STORAGE_KEY, "light");

    const { result } = renderHook(() => useThemeMode(), { wrapper });

    expect(result.current.mode).toBe("light");
  });

  it("should fall back to dark mode when the stored value is invalid", () => {
    localStorage.setItem(STORAGE_KEY, "sepia");

    const { result } = renderHook(() => useThemeMode(), { wrapper });

    expect(result.current.mode).toBe("dark");
  });

  it("should switch to the opposite mode when toggled", () => {
    const { result } = renderHook(() => useThemeMode(), { wrapper });

    act(() => {
      result.current.toggleTheme();
    });

    expect(result.current.mode).toBe("light");
  });

  it("should persist the toggled mode to localStorage", () => {
    const { result } = renderHook(() => useThemeMode(), { wrapper });

    act(() => {
      result.current.toggleTheme();
    });

    expect(localStorage.getItem(STORAGE_KEY)).toBe("light");
  });

  it("should set the color scheme attribute to the current mode", () => {
    renderHook(() => useThemeMode(), { wrapper });

    expect(colorSchemeAttribute()).toBe("dark");
  });

  it("should update the color scheme attribute when toggled", () => {
    const { result } = renderHook(() => useThemeMode(), { wrapper });

    act(() => {
      result.current.toggleTheme();
    });

    expect(colorSchemeAttribute()).toBe("light");
  });
});
