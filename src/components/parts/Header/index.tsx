import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  NAV_ITEMS,
  SECTION_IDS,
} from "@/components/pages/Home/containers/constants";
import { useLocaleSwitch } from "@/hooks/useLocaleSwitch";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useThemeMode } from "@/hooks/useThemeMode";
import { Link } from "@/i18n/navigation";
import { DrawerNav } from "../DrawerNav";
import { Icon } from "../Icon";
import { MenuButton, PcHeaderMenu, appBarSx, toolbarSx } from "./styles";

export const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { mode, toggleTheme } = useThemeMode();
  const { nextLocaleLabel, switchLocale } = useLocaleSwitch();

  const listItems = NAV_ITEMS;
  const activeSection = useScrollSpy({ sectionIds: SECTION_IDS });

  return (
    <AppBar sx={appBarSx}>
      <Toolbar disableGutters sx={toolbarSx}>
        <Box display="flex" alignItems="center">
          {/* ロゴから / に戻ると言語判定が再度走るため、locale を保つ Link を使う */}
          <IconButton component={Link} href="/">
            <Avatar
              alt="ねこのこ"
              src="/assets/img/nekonoko.jpg"
              sx={{ width: "42px", height: "42px" }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{ color: "secondary.main" }}
          >{`Nekonoko's Portfolio`}</Typography>
        </Box>
        <PcHeaderMenu>
          {listItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => {
                  router.push(`#${item.anchor}`);
                }}
                sx={{
                  backgroundColor:
                    activeSection === item.anchor
                      ? "primary.main"
                      : "transparent",
                  borderRadius: "8px",
                  margin: "0 4px",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor:
                      activeSection === item.anchor
                        ? "primary.dark"
                        : "primary.light",
                  },
                }}
              >
                <ListItemText
                  primary={item.text}
                  sx={{
                    color:
                      activeSection === item.anchor
                        ? "white"
                        : "secondary.main",
                    textAlign: "center",
                    transition: "color 0.3s ease",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding sx={{ marginLeft: "8px" }}>
            <Tooltip title={mode === "dark" ? "Light mode" : "Dark mode"}>
              <IconButton onClick={toggleTheme} color="secondary" size="large">
                <Icon icon={mode === "dark" ? "lightMode" : "darkMode"} />
              </IconButton>
            </Tooltip>
          </ListItem>
          <ListItem disablePadding>
            {/* テーマ切り替えと同様、切り替え先の言語を Tooltip に出す */}
            <Tooltip title={nextLocaleLabel}>
              <IconButton onClick={switchLocale} color="secondary" size="large">
                <Icon icon="language" />
              </IconButton>
            </Tooltip>
          </ListItem>
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
