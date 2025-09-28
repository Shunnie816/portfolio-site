import { TypingCarousel } from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TypingCarousel> = {
  component: TypingCarousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    texts: {
      control: "object",
      description: "表示するテキストの配列",
    },
    typingSpeed: {
      control: { type: "range", min: 50, max: 500, step: 50 },
      description: "タイピング速度（ミリ秒）",
    },
    deletingSpeed: {
      control: { type: "range", min: 25, max: 200, step: 25 },
      description: "削除速度（ミリ秒）",
    },
    pauseDuration: {
      control: { type: "range", min: 500, max: 5000, step: 500 },
      description: "タイピング完了後の一時停止時間（ミリ秒）",
    },
    showCursor: {
      control: "boolean",
      description: "カーソルを表示するかどうか",
    },
    cursorChar: {
      control: "text",
      description: "カーソル文字",
    },
    loop: {
      control: "boolean",
      description: "ループするかどうか",
    },
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2"],
      description: "Typography variant",
    },
    color: {
      control: "text",
      description: "テキストの色",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    texts: ["I am Nekonoko", "Frontend Developer", "TypeScript Expert"],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
    showCursor: true,
    cursorChar: "|",
    loop: true,
    variant: "h3",
    color: "text.primary",
  },
};

export const FastTyping: Story = {
  args: {
    texts: ["Quick Typing", "Fast Animation", "Speed Demo"],
    typingSpeed: 50,
    deletingSpeed: 25,
    pauseDuration: 1000,
    showCursor: true,
    cursorChar: "|",
    loop: true,
    variant: "h4",
  },
};

export const SlowTyping: Story = {
  args: {
    texts: ["Slow and Steady", "Careful Typing", "Patient Animation"],
    typingSpeed: 200,
    deletingSpeed: 100,
    pauseDuration: 3000,
    showCursor: true,
    cursorChar: "|",
    loop: true,
    variant: "h2",
  },
};

export const NoCursor: Story = {
  args: {
    texts: ["No Cursor", "Clean Look", "Simple Animation"],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
    showCursor: false,
    loop: true,
    variant: "h3",
  },
};

export const CustomCursor: Story = {
  args: {
    texts: ["Custom Cursor", "Different Symbol", "Unique Style"],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
    showCursor: true,
    cursorChar: "◆",
    loop: true,
    variant: "h3",
  },
};

export const SingleText: Story = {
  args: {
    texts: ["Single Text Example"],
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
    showCursor: true,
    cursorChar: "|",
    loop: false,
    variant: "h3",
  },
};
