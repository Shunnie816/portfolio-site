import { WorkCard } from ".";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta<typeof WorkCard> = {
  component: WorkCard,
};

export default meta;
type Story = StoryObj<typeof WorkCard>;

export const Default: Story = {
  args: {
    title: "Portfolio",
    description: "Experienced most of the developments with this.",
    skills: ["TypeScript", "Next.js", "React", "Firebase"],
    repogitoryUrl: "https://example.com",
    zennUrl: "https://example.com",
    workUrl: "https://example.com",
  },
};
