---
name: implement
description: タスクリストをもとに実装を進め、各タスク完了後にコミットする。実装フェーズに入るとき、またはサブスコープ（component, hook, style, config）を指定して実装するときに使う。
argument-hint: "[component|hook|style|config]"
allowed-tools: Bash(gh issue view:*), Bash(git branch:*), Bash(git log:*), Bash(git status:*), Bash(npx tsc --noEmit)
---

# /implement — 実装担当

## 現在の状態

```!
echo "branch: $(git branch --show-current)"
echo "--- commits (main..HEAD) ---"
git log main..HEAD --oneline
echo "--- working tree ---"
git status --short
N=$(git branch --show-current | sed -n 's/.*issue-\([0-9][0-9]*\).*/\1/p')
if [ -n "$N" ]; then
  echo "--- Issue #$N の最新タスクコメント ---"
  gh issue view "$N" --json comments --jq '.comments[-1].body // "（タスクコメントなし）"'
fi
```

## 手順

1. 上記のタスクチェックリストから、未完了のものを上から順に実装する。
2. 各タスク完了後にコミットする。
3. 全タスク完了後にユーザーへ報告する。

## コミット規約

- Conventional Commits 形式（`feat:` / `fix:` / `refactor:` / `test:` / `chore:` / `docs:`）
- 1コミット = 1責務。無関係な変更を混ぜない
- コミット前に `npx tsc --noEmit` を実行する
- lint は husky の lint-staged がコミット時に自動実行するため、手動実行は不要

## サブスコープ

`$ARGUMENTS` にスコープ名が指定された場合、その範囲に絞って実装する:

- `component` — UI コンポーネント
- `hook` — カスタム React フック
- `style` — スタイル定義
- `config` — 設定ファイル
