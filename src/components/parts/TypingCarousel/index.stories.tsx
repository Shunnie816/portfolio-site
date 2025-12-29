import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { TypingCarousel } from "./index";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

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

const wrapper = css`
  background-color: var(--bg-color-dark);
`;

const Wrapper = emotionStyled.div`
  ${wrapper}
`;

const Component: Story["render"] = (args) => {
  return (
    <Wrapper>
      <TypingCarousel {...args} />
    </Wrapper>
  );
};

export const Default: Story = {
  args: {
    texts: ["I am Nekonoko", "Frontend Developer", "TypeScript Expert"],
  },
  render: Component,
};

export const LongText: Story = {
  args: {
    texts: [
      "This is a very long text that should wrap properly on mobile devices",
      "I am a Frontend Developer who loves creating amazing user experiences",
      "I specialize in React, TypeScript, and modern web technologies",
    ],
  },
  render: Component,
};

export const SingleText: Story = {
  args: {
    texts: ["Single Text Example"],
  },
  render: Component,
};
