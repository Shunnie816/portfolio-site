import { Layout } from "../Layout";
import { Footer } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

const Component: Story["render"] = () => {
  return (
    <Layout>
      <Footer />
    </Layout>
  );
};

export const Default: Story = {
  args: {},
  render: Component,
};
