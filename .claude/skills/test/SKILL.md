---
name: test
description: テスト観点を列挙してテストコードを作成する。ビジネスロジックやカスタムフックのテストが必要なとき、実装後の品質確認をするときに使う。
argument-hint: "[file-path or function-name]"
allowed-tools: Bash(git diff:*), Bash(npm run lint:style), Bash(npm test:*)
---

# /test — テスト担当

## 直近の変更

```!
git diff main...HEAD --stat
```

## 手順

1. `$ARGUMENTS` に対象ファイル・関数名が渡された場合はそれを対象にする。
   なければ上記の差分から対象を特定する。
2. テスト観点を列挙してユーザーに提示する（実装前に合意を取る）。
3. テストコードを作成する。
4. `npm test` でテストが通ることを確認する。
5. `npm run lint:style` でスタイル系の lint を確認する。
   ESLint とビルドは Claude Code では実行しない（husky の lint-staged と CI が担当する）。

## テスト観点の列挙フォーマット

```
対象: <ファイルパス or 関数名>

テスト観点:
- 正常系: 〜のとき、〜を返すべき
- 異常系: 〜のとき、〜をすべき
- 境界値: 〜のとき、〜になるべき
```

## テスト設計原則

- 振る舞い（Behavior）を検証し、実装詳細には依存しない
- 1テスト = 1振る舞い
- テストは独立して実行可能にする
- `it("〜すべき")` の形式でテスト名を書く
- Magic Number を使わない
- モックは最小限にする

## 注意

- テストランナーは Vitest + React Testing Library（jsdom 環境）
- テストファイルは対象と同じディレクトリに `*.test.ts(x)` で配置する
- `globals` は有効にしていないため、`describe` / `it` / `expect` は `vitest` から明示 import する
- UI の見た目はテストしない（ビジネスロジックとカスタムフックを優先する）
