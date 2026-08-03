import { ArticleCard } from ".";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof ArticleCard> = {
  component: ArticleCard,
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {
  args: {
    title: "React Hook Form × Zodで実務に耐えるフォーム実装を作る",
    url: "https://example.com",
    publishedAt: "2025-10-31T21:00:02.000Z",
  },
};

/** タイトルが長い場合は3行で省略される */
export const LongTitle: Story = {
  args: {
    ...Default.args,
    title:
      "registerでは動かない？React Hook FormとMUIを正しく連携させる方法と、その背景にある設計思想について詳しく解説する記事",
  },
};

/** pubDate が不正な記事は日付なしで表示する */
export const WithoutDate: Story = {
  args: {
    ...Default.args,
    publishedAt: undefined,
  },
};
