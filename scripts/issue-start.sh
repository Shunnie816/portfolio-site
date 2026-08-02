#!/usr/bin/env bash
# Usage: ./scripts/issue-start.sh <issue-number>
# GitHub Issue を取得し、ブランチを切って Claude Code のコンテキストを準備する

set -euo pipefail

ISSUE_NUMBER="${1:?Usage: $0 <issue-number>}"

# --- Issue 取得 (jq 不要: gh --template を使用) ---
echo "=== Issue #${ISSUE_NUMBER} を取得中... ==="

TITLE=$(gh issue view "$ISSUE_NUMBER" --json title  --template '{{.title}}')
BODY=$(gh issue view  "$ISSUE_NUMBER" --json body   --template '{{.body}}')
STATE=$(gh issue view "$ISSUE_NUMBER" --json state  --template '{{.state}}')
LABELS=$(gh issue view "$ISSUE_NUMBER" --json labels --template '{{range .labels}}{{.name}} {{end}}')

BODY="${BODY:-"(本文なし)"}"
LABELS="${LABELS:-"(なし)"}"

if [ "$STATE" = "CLOSED" ]; then
  echo "警告: Issue #${ISSUE_NUMBER} はすでにクローズされています。続けますか？ [y/N]"
  read -r CONFIRM
  [[ "$CONFIRM" =~ ^[Yy]$ ]] || exit 0
fi

# --- ブランチ名生成 ---
# タイトルを slug 化 (小文字・英数字とハイフンのみ、日本語は除去)
SLUG=$(echo "$TITLE" \
  | tr '[:upper:]' '[:lower:]' \
  | sed 's/[^a-z0-9[:space:]-]//g' \
  | sed 's/[[:space:]][[:space:]]*/-/g' \
  | sed 's/--*/-/g' \
  | sed 's/^-//;s/-$//' \
  | cut -c1-40)

# slug が空の場合 (タイトルが日本語のみ) は issue番号だけにする
if [ -z "$SLUG" ]; then
  SLUG="work"
fi

# ラベルに応じてプレフィックスを決定
if echo "$LABELS" | grep -qi "bug\|fix"; then
  PREFIX="fix"
elif echo "$LABELS" | grep -qi "chore\|setup\|ci"; then
  PREFIX="chore"
elif echo "$LABELS" | grep -qi "docs\|documentation"; then
  PREFIX="docs"
elif echo "$LABELS" | grep -qi "refactor"; then
  PREFIX="refactor"
else
  PREFIX="feature"
fi

BRANCH_NAME="${PREFIX}/issue-${ISSUE_NUMBER}-${SLUG}"

echo ""
echo "=== Issue情報 ==="
echo "  タイトル : $TITLE"
echo "  ラベル   : $LABELS"
echo "  ブランチ : $BRANCH_NAME"
echo ""

# --- ブランチ作成 ---
# すでに同名ブランチが存在する場合はチェックアウトのみ
if git show-ref --verify --quiet "refs/heads/${BRANCH_NAME}"; then
  echo "ブランチ '${BRANCH_NAME}' はすでに存在します。チェックアウトします。"
  git checkout "$BRANCH_NAME"
else
  BASE_BRANCH="main"
  echo "ベースブランチ '${BASE_BRANCH}' からブランチを作成します。"
  git fetch origin "$BASE_BRANCH" --quiet
  git checkout -b "$BRANCH_NAME" "origin/${BASE_BRANCH}"
fi

echo ""
echo "=== 準備完了 ==="
echo "Issue 本文とタスクは SessionStart hook (scripts/session-context.mjs) が"
echo "ブランチ名から解決して Claude Code に渡します。"
echo ""
echo "--- Issue 本文 ---"
echo "$BODY"
echo "------------------"
