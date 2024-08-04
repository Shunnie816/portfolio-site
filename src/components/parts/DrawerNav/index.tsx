import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from "@mui/material";
import React from "react";
import { Icon } from "../Icon";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export const DrawerNav = ({ isOpen, onClose, onOpen }: Props) => {
  return (
    <SwipeableDrawer
      anchor="top"
      open={isOpen}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Box role="presentation" onClick={onClose} onKeyDown={onClose}>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <Icon icon="gitHub" />
                  ) : (
                    <Icon icon="linkedIn" />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "primary.dark" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider variant="middle" />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <Icon icon="gitHub" />
                  ) : (
                    <Icon icon="linkedIn" />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "primary.dark" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};
