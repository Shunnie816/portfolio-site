---
description: lint・ビルド確認後、develop への PR をテンプレートに従って作成する。実装が完了してレビュー依頼を出すときに使う。
---

# /pr — PR 作成担当

## 手順

1. `.claude/issue-context.md` から Issue 番号・ブランチ名を読み取る。
2. `git log develop..HEAD --oneline` で変更コミットを確認する。
3. `npx tsc --noEmit` を実行して型エラーがないことを確認する。
4. 以下のテンプレートで PR を作成する:
   - lint は husky の lint-staged がコミット時に実行済み
   - build の最終確認は CI に委ねる
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

- [ ] 型エラーなし (`npx tsc --noEmit`)
- [ ] lint: husky の lint-staged がコミット時に確認済み
- [ ] build: CI で確認
```

## 注意

- PR のベースブランチは必ず `develop`（`main` への直接 PR は禁止）
- タイトルは Conventional Commits に準じる形式（`feat:`, `fix:` など）
- `Closes #番号` を本文に含めること
