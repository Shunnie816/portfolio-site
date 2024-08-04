import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import { Layout } from "../Layout";
import { Header } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  component: Header,
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
    <Layout>
      <Wrapper>
        <Header />
      </Wrapper>
    </Layout>
  );
};

export const Default: Story = {
  args: {},
  render: Component,
};
