/**
 * ブランドカラーの一次情報。
 *
 * ここが色の唯一の定義元であり、以下の2系統がどちらもこの定数を参照する。
 * - MUI テーマのパレット（`components/themes/index.ts`）
 * - CSS カスタムプロパティ（`assets/styles/variable.ts`）
 *
 * 色を変更するときはこのファイルだけを編集する。
 */
export const COLOR = {
  darkNavy: "#201e43",
  navy: "#134b70",
  lightNavy: "#508c9b",
  gray: "#eeeeee",
  mediumGray: "#a0a0a0",
  lightGray: "#fafafa",
  lightBlue: "#eef7ff",
  fog: "#64748b",
  white: "#ffffff",
} as const;
