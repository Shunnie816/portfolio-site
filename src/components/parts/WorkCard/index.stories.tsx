import { Layout } from "../Layout";
import { WorkCard } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof WorkCard> = {
  component: WorkCard,
};

export default meta;
type Story = StoryObj<typeof WorkCard>;

const Component: Story["render"] = (args) => {
  return (
    <Layout>
      <WorkCard {...args} />
    </Layout>
  );
};

export const Default: Story = {
  args: {
    title: "Portfolio",
    description: "Experienced most of the developments with this.",
    skills: ["TypeScript", "Next.js", "React", "Firebase"],
    repogitoryUrl: "https://example.com",
    zennUrl: "https://example.com",
    workUrl: "https://example.com",
  },
  render: Component,
};
