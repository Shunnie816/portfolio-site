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

- `main`: プロダクションブランチ（直接 push 禁止）
- `develop`: 開発ブランチ（PR のベースブランチ）
- 作業ブランチ: `feature/<name>`, `fix/<name>`, `chore/<name>` などの形式

## 注意事項

- テストランナーは現時点で未設定。テストを追加する場合は Jest + React Testing Library の導入を検討すること
- Storybook は Vite ベース (`@storybook/nextjs-vite`) で動作する
- `PR_DESCRIPTION.md` は `.gitignore` 対象のため、コミットしないこと
