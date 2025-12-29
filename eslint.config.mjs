import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import nextVitals from "eslint-config-next/core-web-vitals";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import storybookPlugin from "eslint-plugin-storybook";

export default defineConfig([
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "*.config.{js,mjs,cjs,ts}",
      ".storybook/**",
    ],
  },
  js.configs.recommended,
  ...nextVitals,
  prettierConfig,
  ...storybookPlugin.configs["flat/recommended"],
  {
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    rules: {
      "no-unused-vars": "warn",

      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],

          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },

          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],

          pathGroupsExcludedImportTypes: ["builtin"],
        },
      ],

      "prettier/prettier": [
        "error",
        {
          trailingComma: "es5",
        },
      ],
    },
  },
]);
