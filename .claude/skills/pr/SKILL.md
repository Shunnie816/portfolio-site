---
name: pr
description: 型チェック後、main への PR をテンプレートに従って作成する。実装が完了してレビュー依頼を出すときに使う。
allowed-tools: Bash(git log:*), Bash(git branch:*), Bash(git push:*), Bash(npx tsc --noEmit), mcp__github__create_pull_request
---

# /pr — PR 作成担当

## 現在の状態

```!
echo "branch: $(git branch --show-current)"
echo "--- commits (main..HEAD) ---"
git log main..HEAD --oneline
N=$(git branch --show-current | sed -n 's/.*issue-\([0-9][0-9]*\).*/\1/p')
[ -n "$N" ] && echo "issue: #$N"
```

## 手順

1. `npx tsc --noEmit` を実行して型エラーがないことを確認する。
2. `git push -u origin <ブランチ名>` でブランチを push する。
3. `mcp__github__create_pull_request` で PR を作成する。
   - `owner: Shunnie816` / `repo: portfolio-site` / `base: main` / `head: <ブランチ名>`
   - `body` には**生の改行をそのまま**含める（`\n` とエスケープしない）
   - タイトルは Conventional Commits に準じる形式（`feat:`, `fix:`, `chore:` など）

lint は husky の lint-staged がコミット時に実行済み。build の最終確認は CI に委ねる。

## PR テンプレート

```markdown
## 概要

<!-- 変更内容を簡潔に -->

## 対応 Issue

Closes #<番号>

## 変更内容

-

## 確認事項

- [ ] 型エラーなし (`npx tsc --noEmit`)
- [ ] lint: husky の lint-staged がコミット時に確認済み
- [ ] build: CI で確認
```

## 注意

- ベースブランチは必ず `main`
- `Closes #<番号>` を本文に含めること
