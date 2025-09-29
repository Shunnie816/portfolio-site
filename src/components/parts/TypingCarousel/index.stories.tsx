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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    texts: ["I am Nekonoko", "Frontend Developer", "TypeScript Expert"],
  },
};

export const LongText: Story = {
  args: {
    texts: [
      "This is a very long text that should wrap properly on mobile devices",
      "I am a Frontend Developer who loves creating amazing user experiences",
      "I specialize in React, TypeScript, and modern web technologies",
    ],
  },
};

export const SingleText: Story = {
  args: {
    texts: ["Single Text Example"],
  },
};
