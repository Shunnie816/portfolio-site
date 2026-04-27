"use client";
import React, { createContext, useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue>({
  mode: "dark",
  toggleTheme: () => {},
});

type Props = {
  children: React.ReactNode;
};

function getStoredTheme(): ThemeMode {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("theme");
  return stored === "light" || stored === "dark" ? stored : "dark";
}

export const ThemeModeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<ThemeMode>(getStoredTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-color-scheme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
