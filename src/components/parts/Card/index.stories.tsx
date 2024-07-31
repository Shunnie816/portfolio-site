import { Typography } from "@mui/material";
import { Card } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: "TypeScript",
    children: (
      <Typography>Experienced most of the developments with this.</Typography>
    ),
    avatarName: "ts.png",
  },
};
