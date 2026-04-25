---
description: lint・ビルド確認後、develop への PR をテンプレートに従って作成する。実装が完了してレビュー依頼を出すときに使う。
---

# /pr — PR 作成担当

## 手順

1. `.claude/issue-context.md` から Issue 番号・ブランチ名を読み取る。
2. `git log develop..HEAD --oneline` で変更コミットを確認する。
3. `npm run lint` を実行してエラーがないことを確認する。
4. `npm run build` を実行してビルドが成功することを確認する。
5. 以下のテンプレートで PR を作成する:
   ```bash
   gh pr create --base develop --head <ブランチ名> --title "<タイトル>" --body "..."
   ```

## PR テンプレート

```markdown
## 概要

<!-- 変更内容を簡潔に -->

## 対応 Issue

Closes #<番号>

## 変更内容

-

## 確認事項

- [ ] lint エラーなし (`npm run lint`)
- [ ] ビルド成功 (`npm run build`)
```

## 注意

- PR のベースブランチは必ず `develop`（`main` への直接 PR は禁止）
- タイトルは Conventional Commits に準じる形式（`feat:`, `fix:` など）
- `Closes #番号` を本文に含めること
