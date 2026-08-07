# Portfolio Website

[日本語](./README.md) | English

The portfolio website of Nekonoko, a frontend engineer.
It brings together my work history, personal projects, and technical writing.

🔗 **https://shunniehub.com**

## Features

- **Japanese / English switching** — each language is served under `/ja` and `/en`, while `/` redirects based on the browser's language settings
- **Light / dark theme** — switchable from the header, and the choice is remembered on the next visit
- **Auto-updating article list** — the latest posts are fetched from the Zenn RSS feed
- **Container / Presentation pattern** — logic and presentation are separated, and each UI component can be reviewed in isolation with Storybook

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 / React 19 |
| UI | MUI (Material UI) v7 |
| Styling | Emotion (styled) + CSS custom properties |
| Internationalization | next-intl |
| Component development | Storybook 10 (Vite based) |
| Testing | Vitest + React Testing Library |
| Lint / Format | ESLint 9 (Flat Config) / Prettier / Stylelint |
| Hosting | Firebase App Hosting (SSR / ISR) |

## Getting Started

Requirements: **Node.js 22**

```bash
npm ci
npm run dev
```

The site runs at http://localhost:3000.

## Scripts

```bash
npm run dev             # Start the dev server (localhost:3000)
npm run build           # Production build
npm run start           # Start the production server
npm run lint            # Run ESLint
npm run lint:style      # Run Stylelint
npm run lint:style:fix  # Fix Stylelint issues
npm run storybook       # Start Storybook (localhost:6006)
npm run build-storybook # Build Storybook
npm test                # Run Vitest once and exit
npm run test:watch      # Run Vitest in watch mode
```

## Project Structure

```
messages/                  # Translation resources (en.json / ja.json)
src/
├── app/[locale]/          # Per-language routes (/en, /ja)
├── assets/styles/         # Global styles and design tokens
├── components/
│   ├── pages/             # Page-level components
│   │   └── Home/
│   │       ├── containers/    # Logic layer
│   │       └── presentations/ # Presentation layer
│   ├── parts/             # Shared UI components
│   └── themes/            # MUI theme configuration
├── contexts/              # React Context
├── hooks/                 # Custom hooks
├── i18n/                  # next-intl configuration
├── lib/                   # External data fetching (Zenn RSS, etc.)
└── proxy.ts               # Language detection and redirects
```

## Deployment

The site is hosted on Firebase App Hosting and deploys automatically when changes are merged into `main`.

## License

**The source code is released under the [MIT License](./LICENSE)** — feel free to read and reuse it.

However, **the content (profile, work history, text, and images) is not covered by that license** and all rights are reserved.
Please use this repository as a reference for its implementation.
