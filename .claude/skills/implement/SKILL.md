---
description: タスクリストをもとに実装を進め、各タスク完了後にコミットする。実装フェーズに入るとき、またはサブスコープ（component, hook, style, config）を指定して実装するときに使う。
---

# /implement — 実装担当

## 手順

1. `.claude/issue-context.md` から Issue 番号・ブランチ名を読み取る。
2. `gh issue view <番号>` でタスクチェックリストを確認する。
3. 未完了タスクを上から順に実装する。
4. 各タスク完了後に Conventional Commits 形式でコミットする:
   - `feat:` 新機能
   - `fix:` バグ修正
   - `refactor:` リファクタリング
   - `chore:` ツール・設定変更
   - `docs:` ドキュメント
5. 全タスク完了後にユーザーへ報告する。

## コミット規約

- 1コミット = 1責務
- 無関係な変更を混ぜない
- コミット前に型チェックを実行する（`npx tsc --noEmit`）
- lint は husky の lint-staged がコミット時に自動で実行するため、手動実行は不要

## サブスキル

`$ARGUMENTS` にサブスキル名を指定すると、そのスコープに絞って実装する:

- `component` — UI コンポーネントの実装
- `hook` — カスタム React フックの実装
- `style` — スタイル定義の実装
- `config` — 設定ファイルの変更
