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

## 注意事項

- テストランナーは現時点で未設定。テストを追加する場合は Jest + React Testing Library の導入を検討すること
- Storybook は Vite ベース (`@storybook/nextjs-vite`) で動作する
