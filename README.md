# ポートフォリオサイト

日本語 | [English](./README.en.md)

フロントエンドエンジニア「ねこのこ」のポートフォリオサイトです。
経歴・個人開発・技術記事をまとめて公開しています。

🔗 **https://shunniehub.com**

## 特徴

- **日本語 / 英語の切り替え** — `/ja` `/en` で各言語のページを提供し、`/` はブラウザの言語設定を見て振り分けます
- **ライト / ダークテーマ** — ヘッダーから切り替えでき、選択は次回以降も保持されます
- **記事一覧の自動更新** — Zenn の RSS から最新の投稿を取得して表示します
- **Container / Presentation パターン** — ロジックと表示を分離し、UI は Storybook で個別に確認できます

## 技術スタック

| 分類 | 使用技術 |
| --- | --- |
| フレームワーク | Next.js 16（App Router） |
| 言語 | TypeScript 5 / React 19 |
| UI | MUI (Material UI) v7 |
| スタイリング | Emotion（styled）+ CSS カスタムプロパティ |
| 多言語化 | next-intl |
| コンポーネント開発 | Storybook 10（Vite ベース） |
| テスト | Vitest + React Testing Library |
| Lint / Format | ESLint 9（Flat Config）/ Prettier / Stylelint |
| ホスティング | Firebase App Hosting（SSR / ISR 対応） |

## セットアップ

必要環境: **Node.js 22**

```bash
npm ci
npm run dev
```

http://localhost:3000 で起動します。

## スクリプト

```bash
npm run dev             # 開発サーバー起動 (localhost:3000)
npm run build           # プロダクションビルド
npm run start           # プロダクションサーバー起動
npm run lint            # ESLint 実行
npm run lint:style      # Stylelint 実行
npm run lint:style:fix  # Stylelint 自動修正
npm run storybook       # Storybook 起動 (localhost:6006)
npm run build-storybook # Storybook ビルド
npm test                # Vitest 実行（1回だけ実行して終了）
npm run test:watch      # Vitest ウォッチモード
```

## ディレクトリ構成

```
messages/                  # 翻訳リソース（en.json / ja.json）
src/
├── app/[locale]/          # 言語ごとのルート（/en, /ja）
├── assets/styles/         # グローバルスタイル・デザイントークン
├── components/
│   ├── pages/             # ページ単位のコンポーネント
│   │   └── Home/
│   │       ├── containers/    # ロジック層
│   │       └── presentations/ # 表示層
│   ├── parts/             # 共通 UI コンポーネント
│   └── themes/            # MUI テーマ設定
├── contexts/              # React Context
├── hooks/                 # カスタムフック
├── i18n/                  # next-intl の設定
├── lib/                   # 外部データ取得（Zenn RSS など）
└── proxy.ts               # 言語判定とリダイレクト
```

## デプロイ

Firebase App Hosting でホストしています。`main` へのマージをトリガーに自動デプロイされます。

## ライセンス

**ソースコードは [MIT License](./LICENSE)** です。自由に参照・再利用いただけます。

ただし、**掲載内容（プロフィール・経歴・文章・画像）はライセンスの対象外**で、著作権はすべて留保します。
サイトの実装を参考にする目的でご利用ください。
