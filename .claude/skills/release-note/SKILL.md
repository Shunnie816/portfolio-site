---
description: リリースノートを作成して GitHub Release を公開する。main へのマージ完了後に使う。
---

# /release-note — リリースノート作成

## 手順

1. **最新リリースタグを確認**する:
   ```bash
   gh release list --limit 1
   ```

2. **前回リリース以降のコミット・PRを収集**する:
   ```bash
   git log <前回タグ>..origin/main --oneline
   gh pr list --state merged --base main --limit 10 --json number,title,mergedAt
   ```

3. **次のバージョンを決定**する（Semantic Versioning）:
   - `feat:` を含む → minor バージョンを上げる（例: v1.3.0 → v1.4.0）
   - `fix:` / `refactor:` のみ → patch バージョンを上げる（例: v1.3.0 → v1.3.1）
   - 破壊的変更がある場合 → major バージョンを上げる

4. **リリースノートを以下のテンプレートで作成**し、GitHub Release を公開する:
   ```bash
   gh release create <タグ> \
     --title "<タグ> - <リリースタイトル>" \
     --notes "..." \
     --target main
   ```

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

## サブエージェント戦略

- このスキルはシンプルな操作が中心のため、サブエージェントは基本不要

## 注意

- タグは `v<major>.<minor>.<patch>` 形式
- `--target main` を必ず指定する
- リリース公開は不可逆なので、内容を確認してから実行する
