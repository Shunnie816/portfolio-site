import { describe, expect, it } from "vitest";
import en from "../../messages/en.json";
import ja from "../../messages/ja.json";

/**
 * ネストしたメッセージを「キー, 値」の組に平坦化する。
 * 配列は添字をキーに含めるため、要素数の差分も検出できる。
 */
const flatten = (value: unknown, prefix = ""): [string, unknown][] => {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => flatten(item, `${prefix}[${index}]`));
  }
  if (typeof value === "object" && value !== null) {
    return Object.entries(value).flatMap(([key, child]) =>
      flatten(child, prefix ? `${prefix}.${key}` : key)
    );
  }
  return [[prefix, value]];
};

const keysOf = (messages: unknown) =>
  flatten(messages)
    .map(([key]) => key)
    .sort();

describe("messages", () => {
  it("should define the same keys in every locale", () => {
    expect(keysOf(ja)).toEqual(keysOf(en));
  });

  it("should not contain empty messages", () => {
    const empty = [...flatten(en), ...flatten(ja)]
      .filter(([, value]) => typeof value !== "string" || value.trim() === "")
      .map(([key]) => key);

    expect(empty).toEqual([]);
  });
});
