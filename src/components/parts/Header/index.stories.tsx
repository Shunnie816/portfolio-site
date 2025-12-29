import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { Header } from ".";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

const wrapper = css`
  background-color: var(--bg-color-dark);
  height: 100vh;
`;

const Wrapper = emotionStyled.div`
  ${wrapper}
`;

const Component: Story["render"] = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};

export const Default: Story = {
  args: {},
  render: Component,
};
