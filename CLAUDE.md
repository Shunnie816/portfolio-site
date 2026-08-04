# CLAUDE.md

このファイルは Claude Code がこのリポジトリで作業する際のガイドラインです。

## プロジェクト概要

フロントエンドエンジニアのポートフォリオサイト。Next.js (App Router) で構築されており、Firebase Hosting でホストされている。

## 技術スタック

- **フレームワーク**: Next.js 16 (App Router)
- **言語**: TypeScript 5
- **UI ライブラリ**: MUI (Material UI) v7 + Emotion
- **スタイリング**: Emotion styled components + CSS カスタムプロパティ
- **コンポーネント開発**: Storybook 10
- **多言語化**: next-intl（日本語 / 英語）
- **Lint / Format**: ESLint 9 (Flat Config) + Prettier + Stylelint
- **ホスティング**: Firebase App Hosting（SSR / ISR 対応）

Tailwind CSS と Sass は過去に導入されていたが、実際には一度も使われていなかったため削除した（#80）。
スタイリングは Emotion に一本化されている。

## ディレクトリ構成

```
messages/                       # 翻訳リソース（en.json / ja.json）
src/
├── app/
│   └── [locale]/               # 言語ごとのルート（/en, /ja）
│       ├── layout.tsx          # ルートレイアウト（html / Provider）
│       ├── page.tsx            # トップページ
│       ├── not-found.tsx       # 404 ページ
│       └── [...rest]/          # 未定義パスを 404 に落とすキャッチオール
├── assets/
│   └── styles/                 # グローバルスタイル・CSS 変数
├── components/
│   ├── pages/                  # ページ単位のコンポーネント
│   │   └── Home/
│   │       ├── containers/     # ロジック層（Container）
│   │       └── presentations/  # 表示層（Presentation）
│   ├── parts/                  # 共通 UI コンポーネント
│   │   ├── ArticleCard/
│   │   ├── DrawerNav/
│   │   ├── ExperienceStep/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Icon/
│   │   ├── Layout/
│   │   ├── TypingCarousel/
│   │   └── WorkCard/
│   └── themes/                 # MUI テーマ設定
├── contexts/                   # React Context
├── hooks/                      # カスタム React フック
├── i18n/                       # next-intl の設定（routing / request / navigation）
├── lib/                        # 外部データ取得（Zenn RSS など）
└── proxy.ts                    # 言語判定とリダイレクト
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
npm test                # Vitest 実行（1回だけ実行して終了）
npm run test:watch      # Vitest ウォッチモード
```

## コーディング規約

- **import の順序**: ESLint `import/order` ルールに従う（builtin → external → internal → parent → sibling）
- **スタイル定義**: コンポーネントと同ディレクトリの `styles.ts` に Emotion `styled` で定義する
- **デザイントークン**: 下記「デザイントークンの一次情報」を参照する
- **型安全**: `any` を使用しない。型が不明な場合は `unknown` を使い、適切に narrowing する
- **コミット**: Conventional Commits 形式。詳細は下記「コミットメッセージ規約」を参照

## デザイントークンの一次情報

トークンの種類ごとに定義元を1つに固定している。**同じ値を2箇所に書かない。**

| トークン | 一次情報 | 参照方法 |
| --- | --- | --- |
| 色 | `src/assets/styles/colors.ts` の `COLOR` | MUI テーマ経由（`sx={{ color: "text.primary" }}`）または CSS 変数経由（`var(--bg-color-dark)`） |
| スペーシング | `src/assets/styles/variable.ts` | `var(--spacing-4)` |
| ブレークポイント / ヘッダー高 | `src/assets/styles/variable.ts` | `${breakpoint}` / `${headerHeight}` を import して補間 |
| フォントサイズ | `src/components/themes/index.ts` の `typography` | MUI の `variant`（`<Typography variant="h4">`） |

### 色の流れ

```
colors.ts (COLOR)
├── components/themes/index.ts … MUI パレット（sx / variant から参照）
└── assets/styles/variable.ts  … CSS 変数（Emotion styled から参照）
```

`colors.ts` が唯一の hex 定義元。MUI テーマも CSS 変数もここを import して組み立てるため、
**色を変えるときは `colors.ts` だけを編集すれば両系統に反映される**。

以前は `themes/index.ts` と `variable.ts` の両方に hex を書き、
「ここを変更したら variable.ts も変更する」というコメントで同期を担保していたが、実際に値が乖離していた（#80）。

### ライト / ダークの切り替え

`ThemeContext` が `<html>` の `data-color-scheme` 属性を切り替える。
CSS 変数はこの属性セレクタで上書きし、MUI 側は `Layout` が `darkTheme` / `lightTheme` を出し分ける。

- **常にダーク背景のセクション**（Hero / Footer）は `<ThemeProvider theme={darkTheme}>` で囲む
- `--text-default` はモードによらず darkNavy 固定。ダーク背景内のテキストは `sx` で明示的に上書きする

MUI の `cssVariables` + `colorSchemes` へ移行すればこの二系統を1つにできるが、
`colorSchemes.dark` は `palette.mode: "dark"` を強制し、`divider` が `rgba(0,0,0,.12)` → `rgba(255,255,255,.12)` に変わる。
常に白背景の Experiences で Stepper の区切り線が見えなくなるため見送っている（#80 に詳細）。

## 多言語化（i18n）

日本語と英語を**対等に提供する**（#65 の方針）。「日本語版を追加する」ではないため、
文言を足すときは必ず両方の言語に入れる。

### ルーティング

| パス | 挙動 |
| --- | --- |
| `/` | `src/proxy.ts` が `Accept-Language` を見て `/en` か `/ja` へリダイレクトする |
| `/en` `/ja` | 各言語のトップページ。`generateStaticParams` でビルド時に静的生成される |
| `/en/foo` | `[...rest]` のキャッチオールが 404 に落とす |

一度言語を切り替えると next-intl が `NEXT_LOCALE` Cookie を立て、次回以降はそちらを優先する。

Next.js 16 で `middleware` は `proxy` に改称されたため、ファイル名は `src/proxy.ts`。

### 文言の追加手順

1. `messages/en.json` と `messages/ja.json` の**両方**にキーを足す
2. コンポーネントで `useTranslations("<namespace>")` を呼んで参照する
3. `npm test` で `messages` のキーが両言語で一致することを確認する

キーは `src/global.d.ts` の `AppConfig` 拡張により `messages/en.json` から型が導出される。
存在しないキーを渡すとコンパイルエラーになる。

### 翻訳しないもの

- **ナビゲーションとセクション見出し**（Home / About / Works / Writing / Experiences / My Works）
  `useScrollSpy` のアンカー id と1対1で対応させ、切り替えでナビ幅が変動しないようにするため
- **技術名・プロダクト名**（TypeScript / Study Tracker / AI Radar など）

### 実装上の注意

- **配列のメッセージは `t.raw` ではなく `useMessages()` を使う。**
  `t.raw` は戻り値が `any` でキーも型検査されない。`useMessages()` なら
  `messages.Hero.typing` が `string[]` として型付けされ、Provider が持つ
  オブジェクトをそのまま返すため参照も安定する（`useEffect` 依存に渡せる）
- **`params.locale` は `string` で受けて `hasLocale` で絞る。**
  CI は `next build` より先に `tsc --noEmit` を実行するため、
  Next.js が生成する `LayoutProps` / `PageProps` に依存すると型チェックが落ちる
- **ページ遷移は `@/i18n/navigation` の `Link` / `useRouter` を使う。**
  `next/navigation` を直接使うと locale prefix が落ちる
  （ページ内アンカーの `router.push("#works")` は `next/navigation` のままでよい）
- **Storybook は `.storybook/preview.tsx` の decorator が `NextIntlClientProvider` を張る。**
  アプリの layout を通らないため、これがないと `useTranslations` が例外になる。
  ツールバーから言語を切り替えて両言語の見た目を確認できる

## コミットメッセージ規約

commitlint（`commitlint.config.mjs`）が commit-msg hook で検証する。違反するとコミットできない。

### type

`feat` / `fix` / `refactor` / `test` / `chore` / `docs` / `style` / `ci` の8種のみ許可（`type-enum`）。

### 件名を英大文字で始めない

`@commitlint/config-conventional` の `subject-case` が sentence-case / start-case / pascal-case / upper-case を禁止しているため、
**日本語の件名でも先頭が英大文字だと弾かれる**。

```
✖ chore: CI にテストステップを追加する
✖ chore: Vitest + React Testing Library を導入する
✅ chore: ワークフローにテストステップを追加する
✅ chore: テストランナーとして Vitest を導入する
```

先頭に置きたい英単語がある場合は、語順を変えて日本語から書き始める。

## Git ワークフロー

- `main`: プロダクションブランチ（PR のベースブランチ）
- 作業ブランチ: `feature/<name>`, `fix/<name>`, `chore/<name>` などの形式

**`main` への直接コミット・push は禁止。** 作業は必ず Issue 起点でブランチを切ってから開始すること。

## Issue 起点の開発ワークフロー

### スタート手順

```bash
./scripts/issue-start.sh <issue番号>
```

### ブランチ命名規則

| ラベル               | プレフィックス |
| -------------------- | -------------- |
| bug / fix            | `fix/`         |
| chore / setup / ci   | `chore/`       |
| docs / documentation | `docs/`        |
| refactor             | `refactor/`    |
| その他               | `feature/`     |

形式: `{prefix}/issue-{番号}-{タイトルのslug}`

## カスタムスキル（スラッシュコマンド）

`.claude/skills/` に定義されたカスタムスキル。Issue 起点の開発ワークフローを標準化する。
スキルは `/コマンド名` で明示的に呼び出す他、`description` に基づいて Claude が自律的に使用することもある。

| コマンド | 役割 | 使い方 |
| --- | --- | --- |
| `/plan` | Issue を解析してタスクをチェックリスト化し、Issue にコメント投稿する | `/plan 43` or `/plan`（ブランチ名から自動解決） |
| `/implement` | タスクリストをもとに実装を進め、各タスク完了後にコミットする | `/implement` or `/implement hook` |
| `/test` | テスト観点を列挙してテストコードを作成する | `/test src/hooks/useFoo.ts` |
| `/pr` | 型チェック後、`main` への PR をテンプレートに従って作成する | `/pr` |
| `/release-note` | リリースノートを作成して GitHub Release を公開する | `/release-note` |

各スキルは Issue・コミット履歴を `` ```! `` のインライン展開で先読みする。Issue 番号は
引数がなければブランチ名（`{prefix}/issue-{番号}-{slug}`）から解決される。

## チェック実行の役割分担

lint・build の二重実行を防ぐため、チェックの実行主体を明確に分けている。

| チェック | Claude Code | husky（pre-commit） | CI |
| --- | --- | --- | --- |
| ESLint | **禁止**（deny） | ✅ lint-staged | ✅ npm run lint |
| Stylelint | ✅ 手動可 | — | — |
| 型チェック（tsc） | ✅ コミット前に実行 | ✅ npx tsc --noEmit | ✅ tsc --noEmit |
| ビルド | **禁止**（deny） | — | ✅ npm run build |
| テスト | ✅ ロジック修正時に実行 | — | ✅ npm test |

**Claude Code はコミット前に `npx tsc --noEmit` のみ実行する。lint と build は実行しない。**

## 注意事項

- テストランナーは Vitest + React Testing Library。設定は `vitest.config.ts` / `vitest.setup.ts`
- テストファイルは対象と同じディレクトリに `*.test.ts(x)` で配置する
- `globals` は有効にしていないため、`describe` / `it` / `expect` は `vitest` から明示 import する
- Storybook は Vite ベース (`@storybook/nextjs-vite`) で動作する
- 翻訳リソース (`messages/`) は `src/` の外にあるが、`src/i18n/messages.test.ts` が
  両言語のキー一致を検証しているため、追従漏れは `npm test` で落ちる
