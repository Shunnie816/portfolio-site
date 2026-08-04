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
import { NAV_ITEMS } from "@/components/pages/Home/containers/constants";
import { useLocaleSwitch } from "@/hooks/useLocaleSwitch";
import { useThemeMode } from "@/hooks/useThemeMode";
import { Icon } from "../Icon";
import { ListWrapper } from "./styles";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export const DrawerNav = ({ isOpen, onClose, onOpen }: Props) => {
  const router = useRouter();
  const { mode, toggleTheme } = useThemeMode();
  const { nextLocaleLabel, switchLocale } = useLocaleSwitch();

  const listItems = NAV_ITEMS;

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
            {/* テーマ切り替えと同様、切り替え先を表示する */}
            <ListItemButton onClick={switchLocale}>
              <ListItemText
                primary={
                  <ListWrapper>
                    <Icon icon="language" />
                    {nextLocaleLabel}
                  </ListWrapper>
                }
                sx={{ color: "primary.dark", textAlign: "center" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={(e) => {
                e.stopPropagation();
                toggleTheme();
              }}
            >
              <ListItemText
                primary={
                  <ListWrapper>
                    <Icon icon={mode === "dark" ? "lightMode" : "darkMode"} />
                    {mode === "dark" ? "Light Mode" : "Dark Mode"}
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
