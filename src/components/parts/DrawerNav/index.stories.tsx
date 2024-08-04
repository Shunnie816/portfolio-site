import { Button } from "@mui/material";
import { useState } from "react";
import { Layout } from "../Layout";
import { DrawerNav } from ".";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DrawerNav> = {
  component: DrawerNav,
};

export default meta;
type Story = StoryObj<typeof DrawerNav>;

const Component: Story["render"] = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout>
      <Button onClick={() => setIsOpen(true)}>drawer open</Button>
      <DrawerNav
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      />
    </Layout>
  );
};

export const Default: Story = {
  render: Component,
};
