import { css } from "@emotion/react";
import emotionStyled from "@emotion/styled";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { Icon } from "../Icon";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

const listWrapper = css`
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  justify-content: center;
`;

const ListWrapper = emotionStyled.div`
  ${listWrapper}
`;

export const DrawerNav = ({ isOpen, onClose, onOpen }: Props) => {
  const router = useRouter();

  const listItems = [
    { text: "Home", anchor: "home" },
    { text: "About", anchor: "about" },
    { text: "Skills", anchor: "skills" },
    { text: "Experiences", anchor: "experiences" },
  ];

  return (
    <SwipeableDrawer
      anchor="top"
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Box role="presentation" onClick={onClose} onKeyDown={onClose}>
        <List>
          {listItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  router.push(`#${item.anchor}`);
                }}
              >
                <ListItemText
                  primary={item.text}
                  sx={{ color: "primary.dark", textAlign: "center" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider variant="middle" />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                alert("Language settings is under developing");
              }}
            >
              <ListItemText
                primary={
                  <ListWrapper>
                    <Icon icon="language" />
                    Japanese
                  </ListWrapper>
                }
                sx={{ color: "primary.dark", textAlign: "center" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                alert("Convert theme is under developing");
              }}
            >
              <ListItemText
                primary={
                  <ListWrapper>
                    <Icon icon="darkMode" />
                    Dark Mode
                  </ListWrapper>
                }
                sx={{ color: "primary.dark", textAlign: "center" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </SwipeableDrawer>
  );
};
