import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { Icon } from "../Icon";

export const Header = () => {
  const router = useRouter();

  return (
    <AppBar color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar
        disableGutters
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
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
        <IconButton
          size="large"
          edge="start"
          color="secondary"
          aria-label="menu"
        >
          <Icon icon="menu" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
