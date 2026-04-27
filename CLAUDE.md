# CLAUDE.md

このファイルは Claude Code がこのリポジトリで作業する際のガイドラインです。

## プロジェクト概要

フロントエンドエンジニアのポートフォリオサイト。Next.js (App Router) で構築されており、Firebase Hosting でホストされている。

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript 5
- **UI ライブラリ**: MUI (Material UI) v7 + Emotion
- **スタイリング**: Emotion styled components + Sass + Tailwind CSS
- **コンポーネント開発**: Storybook 10
- **Lint / Format**: ESLint 9 (Flat Config) + Prettier + Stylelint
- **ホスティング**: Firebase Hosting

## ディレクトリ構成

```
src/
├── app/                        # Next.js App Router のルートファイル
│   ├── layout.tsx              # ルートレイアウト
│   ├── page.tsx                # トップページ
│   └── not-found.tsx           # 404 ページ
├── assets/
│   └── styles/                 # グローバルスタイル・CSS 変数
├── components/
│   ├── pages/                  # ページ単位のコンポーネント
│   │   └── Home/
│   │       ├── containers/     # ロジック層（Container）
│   │       └── presentations/  # 表示層（Presentation）
│   ├── parts/                  # 共通 UI コンポーネント
│   │   ├── Card/
│   │   ├── DrawerNav/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Icon/
│   │   ├── Layout/
│   │   ├── TypingCarousel/
│   │   └── WorkCard/
│   └── themes/                 # MUI テーマ設定
└── hooks/                      # カスタム React フック
```

## コンポーネント設計パターン

**Container / Presentation パターン**を採用している。

- `containers/index.tsx` — ロジック（状態管理・データ取得・イベントハンドラ）
- `presentations/*/index.tsx` — 表示のみ（props を受け取って描画）
- `styles.ts` — Emotion の `styled` でスタイル定義

各 UI コンポーネントは `components/parts/<ComponentName>/` 以下に配置し、Storybook ファイル (`index.stories.tsx`) とセットで作成する。

## 利用可能なスクリプト

```bash
npm run dev             # 開発サーバー起動 (localhost:3000)
npm run build           # プロダクションビルド
npm run start           # プロダクションサーバー起動
npm run lint            # ESLint 実行
npm run lint:style      # Stylelint 実行
npm run lint:style:fix  # Stylelint 自動修正
npm run storybook       # Storybook 起動 (localhost:6006)
npm run build-storybook # Storybook ビルド
```

## コーディング規約

- **import の順序**: ESLint `import/order` ルールに従う（builtin → external → internal → parent → sibling）
- **スタイル定義**: コンポーネントと同ディレクトリの `styles.ts` に Emotion `styled` で定義する
- **型安全**: `any` を使用しない。型が不明な場合は `unknown` を使い、適切に narrowing する
- **コミット**: Conventional Commits 形式 (`feat:`, `fix:`, `refactor:`, `test:`, `chore:`)

## Git ワークフロー

- `main`: プロダクションブランチ
- `develop`: 開発ブランチ（PR のベースブランチ）
- 作業ブランチ: `feature/<name>`, `fix/<name>`, `chore/<name>` などの形式

**`develop` への直接コミット・push は禁止。** 作業は必ず Issue 起点でブランチを切ってから開始すること。

## Issue 起点の開発ワークフロー

### スタート手順

```bash
./scripts/issue-start.sh <issue番号>
```

このスクリプトが以下を自動で行う:

- Issue の内容を取得
- ラベルに応じたブランチ名を生成して checkout (`feature/issue-{番号}-{slug}`)
- `.claude/issue-context.md` にコンテキストファイルを生成

その後 Claude Code を起動すると、コンテキストファイルを自動で読み込む。

### Claude Code との作業手順

1. **タスク分解**: Issue の内容をもとに具体的な実装タスクを対話で決定する
2. **Issue にタスクを記録**: 合意したタスクをチェックリストとして Issue にコメントする

   ```bash
   gh issue comment <番号> --body "## タスク\n- [ ] ..."
   ```

3. **実装**: タスクを順番に実装してコミットする
4. **PR 作成**: `Closes #<番号>` を本文に含めた PR を作成する

### ブランチ命名規則

| ラベル             | プレフィックス |
| ------------------ | -------------- |
| bug / fix          | `fix/`         |
| chore / setup / ci | `chore/`       |
| docs               | `docs/`        |
| refactor           | `refactor/`    |
| その他             | `feature/`     |

形式: `{prefix}/issue-{番号}-{タイトルのslug}`

### PR テンプレート

```markdown
## 概要

<!-- 変更内容を簡潔に -->

## 対応 Issue

Closes #{番号}

## 変更内容

-

## 確認事項

- [ ] lint エラーなし (`npm run lint`)
- [ ] ビルド成功 (`npm run build`)
```

## カスタムスキル（スラッシュコマンド）

`.claude/skills/` に定義されたカスタムスキル。Issue 起点の開発ワークフローを標準化する。
スキルは `/コマンド名` で明示的に呼び出す他、`description` に基づいて Claude が自律的に使用することもある。

| コマンド | 役割 | 使い方 |
| --- | --- | --- |
| `/plan` | Issue を解析してタスクをチェックリスト化し、Issue にコメント投稿する | `/plan 43` or `/plan`（context から自動取得） |
| `/implement` | タスクリストをもとに実装を進め、各タスク完了後にコミットする | `/implement` or `/implement hook` |
| `/test` | テスト観点を列挙してテストコードを作成する | `/test src/hooks/useFoo.ts` |
| `/pr` | lint・ビルド確認後、`develop` への PR をテンプレートに従って作成する | `/pr` |

### 推奨ワークフロー

```
./scripts/issue-start.sh <番号>  →  /plan  →  /implement  →  /test  →  /pr
```

## サブエージェント戦略

`Agent` ツールでサブタスクを委任するとき、以下の基準でモデルを選ぶ。

| タスク種別 | モデル | 具体例 |
| --- | --- | --- |
| ファイル探索・コード調査 | `haiku` | Explore agent、glob、grep |
| 通常の実装・テスト・PR 作成 | `sonnet` | 機能実装、テストコード生成 |
| 複雑な設計・アーキテクチャ判断 | `opus` | 設計方針の検討、大規模リファクタ |

各スキルにも同様のガイドが記載されており、スキル呼び出し時はスキル側の指示が優先される。

## MCP サーバー設定

MCPサーバーはスコープに応じて2か所に設定する。

### グローバル（全プロジェクト共通）

`claude mcp add -s user <name> ...` で追加し、`~/.claude.json` に保存される。

| MCP | 用途 |
| --- | --- |
| Context7 | ライブラリの最新ドキュメント取得 |
| Playwright | ブラウザ自動化・UIビジュアルテスト |
| Serena | コード解析・シンボル検索 |

確認コマンド: `claude mcp list`

### プロジェクト固有

リポジトリルートの `.mcp.json` に記述し、チームで共有する。
このプロジェクト専用のMCPが必要な場合はここに追加する。

```json
{
  "mcpServers": {
    "project-specific-mcp": { ... }
  }
}
```

### 判断基準

- **グローバル**: どのプロジェクトでも使う汎用ツール（ドキュメント取得・ブラウザ操作・コード解析）
- **プロジェクト固有**: 特定のAPIや社内ツールなど、プロジェクト限定で使うもの

## トークン節約ルール

コスト意識を持って Claude Code を使うためのガイドライン。

### コストを確認するコマンド

| コマンド | 用途 |
| --- | --- |
| `/usage` | 現在のセッションのトークン使用量を詳細表示 |
| `/cost` | モデル別・キャッシュヒット内訳を表示 |
| `/compact` | コンテキストを圧縮してトークンを節約する |

セッションが長くなってきたと感じたら `/usage` で確認し、必要に応じて `/compact` を実行する。

### 高コスト操作を避ける

| 操作 | ガイドライン |
| --- | --- |
| `Read`（大きなファイル） | `offset` と `limit` で必要な行範囲に絞る |
| コードベース全体の探索 | `Grep`・`Glob` で絞り込んでから `Read` する |
| 広範な調査タスク | `Explore` サブエージェントに委任する（メインコンテキストを汚さない） |
| 長い会話の継続 | `/compact` でコンテキストを圧縮する |

### ツール実行ログ

`PostToolUse` hook によって全ツール実行が `.claude/logs/tool-usage.log` に記録される（`.gitignore` 対象）。
どの操作が多いかを後から確認するための観察データとして使う。

## チェック実行の役割分担

lint・build の二重実行を防ぐため、チェックの実行主体を明確に分けている。

| チェック | Claude Code | husky（pre-commit） | CI |
| --- | --- | --- | --- |
| ESLint | **禁止**（deny） | ✅ lint-staged | ✅ npm run lint |
| Stylelint | ✅ 手動可 | — | — |
| 型チェック（tsc） | ✅ コミット前に実行 | ✅ npx tsc --noEmit | ✅ tsc --noEmit |
| ビルド | **禁止**（deny） | — | ✅ npm run build |
| テスト | ロジック修正時に実行 | — | —（導入後に追加） |

**Claude Code はコミット前に `npx tsc --noEmit` のみ実行する。lint と build は実行しない。**

## 注意事項

- テストランナーは現時点で未設定。テストを追加する場合は Jest + React Testing Library の導入を検討すること
- Storybook は Vite ベース (`@storybook/nextjs-vite`) で動作する
