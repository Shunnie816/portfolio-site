# /implement — 実装担当

Issue のタスクリストをもとに実装を進める。

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
- コミット前に lint エラーがないことを確認する（`npm run lint`）

## サブスキル

複雑な Issue では以下のサブスキルに分割できる:

- `/implement component` — UI コンポーネントの実装
- `/implement hook` — カスタム React フックの実装
- `/implement style` — スタイル定義の実装
- `/implement config` — 設定ファイルの変更

`$ARGUMENTS` にサブスキル名が渡された場合は、そのスコープに絞って実装する。
