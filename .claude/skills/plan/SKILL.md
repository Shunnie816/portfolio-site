---
name: plan
description: Issue を解析して実装タスクをチェックリスト化し、Issue にコメント投稿する。Issue 起点の開発を始めるとき、タスク分解が必要なときに使う。
argument-hint: "[issue-number]"
allowed-tools: Bash(gh issue view:*), Bash(git branch:*), Bash(./scripts/issue-start.sh:*), mcp__github__add_issue_comment
---

# /plan — Issue 計画担当

## 対象 Issue と現在のブランチ

```!
echo "branch: $(git branch --show-current)"
N="$ARGUMENTS"
case "$N" in ''|*[!0-9]*) N=$(git branch --show-current | sed -n 's/.*issue-\([0-9][0-9]*\).*/\1/p') ;; esac
if [ -n "$N" ]; then
  gh issue view "$N" --json number,title,body,labels,state,url
else
  echo 'ERROR: Issue 番号を解決できませんでした'
fi
```

## 手順

1. 上記の Issue 本文とラベルから、実装タスクをチェックリスト形式に分解する。
   Issue 番号が解決できていない場合は、先にユーザーへ番号を確認する。
2. タスクをユーザーに提示し、追加・修正があれば反映する。
3. 合意後、`mcp__github__add_issue_comment` で Issue にコメントする。
   - `owner: Shunnie816` / `repo: portfolio-site` / `issue_number: <番号>`
   - `body` には**生の改行をそのまま**含める（`\n` とエスケープしない）
4. 現在のブランチが `main` であれば `./scripts/issue-start.sh <番号>` でブランチを作成する。
   すでに作業ブランチにいる場合はスキップする。

## コメント本文のフォーマット

```markdown
## タスク

- [ ] タスク1
- [ ] タスク2

## 方針

（実装方針の補足があれば記述）
```
