import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
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
import { breakpoint, headerHeight } from "@/assets/styles/variable";
import { DrawerNav } from "../DrawerNav";
import { Icon } from "../Icon";

const menuButton = css`
  @media (min-width: ${breakpoint}) {
    display: none;
  }
`;

const pcHeadermenu = css`
  display: none;
  @media (min-width: ${breakpoint}) {
    display: flex;
    margin: 0;
  }
`;

const MenuButton = emotionStyled.div`
  ${menuButton}
`;

const PcHeaderMenu = emotionStyled.ul`
  ${pcHeadermenu}
`;

const appBarSx = {
  boxShadow: "none",
  backgroundColor: "background.default",
  opacity: "0.8",
  maxHeight: headerHeight,
  justifyContent: "center",
};

const toolbarSx = {
  display: "flex",
  justifyContent: "space-between",
  "@media (min-width: 768px)": {
    padding: "0 72px",
  },
};

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
