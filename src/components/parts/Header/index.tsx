import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { DrawerNav } from "../DrawerNav";
import { Icon } from "../Icon";
import { MenuButton, PcHeaderMenu, appBarSx, toolbarSx } from "./styles";

export const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const listItems = [
    { text: "Home", anchor: "home" },
    { text: "About", anchor: "about" },
    { text: "Skills", anchor: "skills" },
    { text: "Experiences", anchor: "experiences" },
  ];

  return (
    <AppBar sx={appBarSx}>
      <Toolbar disableGutters sx={toolbarSx}>
        <Box display="flex" alignItems="center">
          <IconButton onClick={() => router.push("/")}>
            <Avatar
              alt="ねこのこ"
              src="/assets/img/ねこのこ.jpg"
              sx={{ width: "42px", height: "42px" }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{ color: "secondary.main" }}
          >{`Shun's Portfolio`}</Typography>
        </Box>
        <PcHeaderMenu>
          {listItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  router.push(`#${item.anchor}`);
                }}
              >
                <ListItemText
                  primary={item.text}
                  sx={{ color: "secondary.main", textAlign: "center" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </PcHeaderMenu>
        <MenuButton>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            onClick={() => setIsOpen(true)}
          >
            <Icon icon="menu" />
          </IconButton>
        </MenuButton>
        <DrawerNav
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onOpen={() => setIsOpen(true)}
        />
      </Toolbar>
    </AppBar>
  );
};
