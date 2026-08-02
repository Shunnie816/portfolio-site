---
name: release-note
description: リリースノートを作成して GitHub Release を公開する。main へのマージ完了後に使う。
allowed-tools: Bash(gh release list:*), Bash(gh pr list:*), Bash(git log:*), Bash(git fetch:*), Bash(gh release create:*)
---

# /release-note — リリースノート作成

## 前回リリース以降の変更

```!
git fetch origin main --tags --quiet
LATEST=$(gh release list --limit 1 --json tagName --jq '.[0].tagName // ""')
echo "latest release: ${LATEST:-（リリースなし）}"
echo "--- commits ---"
if [ -n "$LATEST" ]; then
  git log "$LATEST"..origin/main --oneline
else
  git log origin/main --oneline --max-count=30
fi
echo "--- merged PRs ---"
gh pr list --state merged --base main --limit 10 --json number,title,mergedAt
```

## 手順

1. 上記のコミット・PR から次のバージョンを決定する（Semantic Versioning）:
   - `feat:` を含む → minor を上げる（例: v1.3.0 → v1.4.0）
   - `fix:` / `refactor:` のみ → patch を上げる（例: v1.3.0 → v1.3.1）
   - 破壊的変更がある → major を上げる
2. 下記テンプレートでリリースノートを作成し、**ユーザーに提示して確認を取る**。
3. 承認後に GitHub Release を公開する:
   ```bash
   gh release create <タグ> --title "<タグ> - <リリースタイトル>" --target main --notes-file -
   ```
   本文はヒアドキュメントで渡す（`--notes "..."` は改行がリテラル化するため使わない）。

## リリースノートテンプレート

```markdown
## What's New

### Features
- （feat: コミットをもとに記述）

### Bug Fixes
- （fix: コミットをもとに記述）

### Refactor
- （refactor: コミットをもとに記述）

### Chore
- （chore: コミットをもとに記述）
```

- 変更がないセクションは省略する
- 箇条書きはユーザー視点の説明にする（コミットメッセージの直訳ではなく意訳）
- リリースタイトルは変更内容を端的に表す英語のフレーズ（例: "AI Radar Card & Layout Improvements"）

## 注意

- タグは `v<major>.<minor>.<patch>` 形式
- `--target main` を必ず指定する
- **リリース公開は不可逆**。手順2の確認を必ず経ること
