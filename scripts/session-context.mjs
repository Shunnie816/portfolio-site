#!/usr/bin/env node
/**
 * SessionStart hook — 作業ブランチ名から Issue 番号を導出し、
 * Issue のタイトル・ラベル・本文を Claude のコンテキストに注入する。
 *
 * ブランチ名の形式: {prefix}/issue-{番号}-{slug}
 *
 * 状態ファイル（旧 .claude/issue-context.md）を持たないのは、
 * ブランチ名が既に Issue 番号を持っており、Claude が読み忘れる余地をなくすため。
 *
 * 出力なし（exit 0）となるケース:
 *   - main ブランチ、または Issue 番号を含まないブランチ
 *   - git / gh が使えない、gh 未認証、Issue 取得失敗
 * いずれもセッション開始を妨げてはならないため、エラーを無視して静かに終了する。
 */
import { execFileSync } from "node:child_process";

const BRANCH_ISSUE_PATTERN = /issue-(\d+)/;

/** コマンドを実行し、失敗したら null を返す（セッション開始を妨げないため）。 */
function run(command, args) {
  try {
    return execFileSync(command, args, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return null;
  }
}

function resolveIssueNumber() {
  const branch = run("git", ["branch", "--show-current"]);
  return branch?.match(BRANCH_ISSUE_PATTERN)?.[1] ?? null;
}

function fetchIssue(issueNumber) {
  const raw = run("gh", [
    "issue",
    "view",
    issueNumber,
    "--json",
    "number,title,state,labels,body,url",
  ]);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function buildContext(issue) {
  const labels = issue.labels.map((label) => label.name).join(", ") || "なし";
  return [
    `## 作業中の Issue #${issue.number}: ${issue.title}`,
    "",
    `- 状態: ${issue.state}`,
    `- ラベル: ${labels}`,
    `- URL: ${issue.url}`,
    "",
    "### 本文",
    "",
    issue.body?.trim() || "（本文なし）",
  ].join("\n");
}

const issueNumber = resolveIssueNumber();
if (!issueNumber) process.exit(0);

const issue = fetchIssue(issueNumber);
if (!issue) process.exit(0);

process.stdout.write(
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: "SessionStart",
      additionalContext: buildContext(issue),
    },
  })
);
