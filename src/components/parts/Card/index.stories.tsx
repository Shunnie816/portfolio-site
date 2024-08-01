import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "@/components/themes";
import { Card } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

const Component: Story["render"] = (args) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Card {...args} />
    </ThemeProvider>
  );
};

export const Default: Story = {
  args: {
    title: "TypeScript",
    children: "Experienced most of the developments with this.",
    avatarName: "ts.png",
  },
  render: Component,
};
